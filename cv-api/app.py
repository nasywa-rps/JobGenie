from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from modules.parse import process_uploaded_file
from modules.classify_text import classify_text
import os

app = FastAPI()

# Enable CORS: allow frontend (e.g. Vite, React, etc.) to call API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict to ["http://localhost:5173"] or your actual frontend URL in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/classify")
async def classify_pdf(cv: UploadFile = File(...)):
    # Save uploaded file temporarily
    temp_dir = "temp"
    os.makedirs(temp_dir, exist_ok=True)
    temp_path = os.path.join(temp_dir, cv.filename)

    try:
        with open(temp_path, "wb") as f:
            f.write(await cv.read())

        # Step 1: Extract text from CV
        parsed_text = process_uploaded_file(temp_path)

        # Step 2: Classify extracted text
        classification = classify_text(parsed_text)

        # Return results
        return JSONResponse(content={
            "parsed_text": parsed_text,
            "classification": classification
        })

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

    finally:
        # Clean up temporary file
        if os.path.exists(temp_path):
            os.remove(temp_path)
