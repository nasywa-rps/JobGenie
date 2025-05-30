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
        "model": "deepseek/deepseek-r1-0528-qwen3-8b:free",
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
