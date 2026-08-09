export default async function handler(req, res) {
  try {
    const { type, category, q } = req.query;

    let url;

    if (type === "search") {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`;
    } else if (type === "category") {
      url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}