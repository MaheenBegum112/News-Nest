from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://news-nest-blush.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GNEWS_API_KEY = os.getenv("GNEWS_API_KEY")

GNEWS_URL = "https://gnews.io/api/v4/top-headlines"


@app.get("/")
def home():
    return {"message": "NewsNest Backend is running"}


@app.get("/news")
def get_news(category: str = Query(default="")):

    params = {
        "apikey": GNEWS_API_KEY,
        "lang": "en",
        "country": "in",
        "max": 10
    }

    # Add category only if selected
    if category:
        params["category"] = category

    try:
        response = requests.get(
            GNEWS_URL,
            params=params,
            timeout=10
        )

        print("GNews URL:", response.url)
        print("GNews Status:", response.status_code)

        if response.status_code != 200:
            return {
                "status": "error",
                "message": "GNews API request failed",
                "gnews_status": response.status_code,
                "details": response.text
            }

        data = response.json()

        return data

    except requests.exceptions.RequestException as e:
        return {
            "status": "error",
            "message": str(e)
        }

