from langchain_community.document_loaders import PyMuPDFLoader
from pdf2image import convert_from_path
from PIL import Image
import pytesseract
import os
import re
import string

def extract_text_from_pdf(file_path):
    """Extracts text from a text-based PDF using PyMuPDFLoader."""
    try:
        loader = PyMuPDFLoader(file_path)
        data = loader.load()
        return "\n\n".join([page.page_content for page in data])
    except Exception as e:
        print(f"Error extracting text directly: {e}")
        return ""

def extract_text_from_pdf_images(file_path):
    """Extracts text from an image-based PDF using OCR (Tesseract)."""
    try:
        images = convert_from_path(file_path)  # Convert PDF pages to images
        extracted_text = "\n\n".join(pytesseract.image_to_string(img) for img in images)
        return extracted_text
    except Exception as e:
        print(f"Error extracting text with OCR: {e}")
        return ""

def extract_text_from_image(file_path):
    """Extracts text from an image file (PNG, JPG, etc.) using OCR."""
    try:
        img = Image.open(file_path)
        return pytesseract.image_to_string(img)
    except Exception as e:
        print(f"Error extracting text from image: {e}")
        return ""

def clean_text(text):
    """Cleans extracted text by removing special characters, punctuation, and numbers."""
    # Keep this optional - sometimes you want to preserve punctuation and numbers
    special_characters = "○●•◦"
    text = re.sub(f"[{re.escape(special_characters)}]", "", text)
    
    # Remove extra whitespace
    text = " ".join(text.split())
    
    return text

def is_text_sufficient(text, min_length=100):
    """Check if the extracted text is sufficient or needs OCR."""
    # Remove whitespace and check length
    clean = re.sub(r'\s+', '', text)
    return len(clean) >= min_length

def get_file_extension(file_path):
    """Get the file extension from a path."""
    return os.path.splitext(file_path)[1].lower()

def process_document(file_path):
    """
    Process document intelligently, using the appropriate extraction method.
    For PDFs, tries direct extraction first, then falls back to OCR if needed.
    For images, uses OCR directly.
    
    Args:
        file_path: Path to the document file
        
    Returns:
        Extracted text from the document
    """
    file_extension = get_file_extension(file_path)
    
    # For image files, use OCR directly
    if file_extension in [".png", ".jpg", ".jpeg", ".tiff", ".bmp"]:
        return extract_text_from_image(file_path)
        
    # For PDFs, try direct extraction first
    elif file_extension == ".pdf":
        # First, try direct text extraction (faster for digital PDFs)
        direct_text = extract_text_from_pdf(file_path)
        
        # Check if we got enough text
        if is_text_sufficient(direct_text):
            return clean_text(direct_text)
        
        # If direct extraction yielded little text, use OCR (for scanned PDFs)
        ocr_text = extract_text_from_pdf_images(file_path)
        
        # If OCR found more text, use that instead
        if len(ocr_text) > len(direct_text):
            return clean_text(ocr_text)
        
        # Otherwise, return whatever we found with direct extraction
        return clean_text(direct_text)
        
    else:
        return f"Unsupported file format: {file_extension}"

def process_uploaded_file(file_path):
    try:
        return process_document(file_path)
    except Exception as e:
        return f"Error processing file: {str(e)}"


# # Example usage:
# if __name__ == "__main__":
#     # Example for direct file processing
#     sample_file = "path/to/document.pdf"
#     if os.path.exists(sample_file):
#         extracted_text = process_document(sample_file)
#         print(f"Extracted {len(extracted_text)} characters of text")