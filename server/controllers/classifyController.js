
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export const classifyCV = async (req, res) => {
  try {
    const filePath = req.file.path;

    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));

    const response = await axios.post('http://127.0.0.1:8000/classify', formData, {
      headers: formData.getHeaders(),
    });

    res.status(200).json({
      message: 'Classification success',
      parsedText: response.data.parsed_text,
      classification: response.data.classification,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
