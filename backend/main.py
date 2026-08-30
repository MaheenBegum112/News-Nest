from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://news-nest-kyii1mlec-maheenbegum112s-projects.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GNEWS_API_KEY = os.getenv("GNEWS_API_KEY")


@app.get("/")
def home():
    return {"message": "NewsNest Backend is running!"}


@app.get("/news")
def get_news(category: str = ""):

    if category:
        url = "https://gnews.io/api/v4/top-headlines"

        params = {
            "category": category,
            "lang": "en",
            "country": "in",
            "max": 10,
            "apikey": GNEWS_API_KEY
        }

    else:
        url = "https://gnews.io/api/v4/top-headlines"

        params = {
            "lang": "en",
            "country": "in",
            "max": 10,
            "apikey": GNEWS_API_KEY
        }

    response = requests.get(url, params=params)

    return response.json()