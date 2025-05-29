import requests
import json

API_KEY = "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" 

def classify_text(text):
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "deepseek/deepseek-r1-zero:free",
        "messages": [
            {"role": "system", "content": "Analyze the given CV and classify it based on the most relevant job role (e.g., Data Scientist, Software Engineer, Marketing, etc.). Additionally, extract the candidate's education level (e.g., Bachelor's, Master's, PhD) with the institution and list any additional skills mentioned in the CV."},
            {"role": "user", "content": text}
        ]
    }

    response = requests.post(url, headers=headers, data=json.dumps(data))
    if response.status_code == 200:
        return response.json()["choices"][0]["message"]["content"]
    else:
        return f"Error: {response.status_code}"
