
function NewsCard({
  title,
  description,
  image,
  source,
  publishedAt,
  url,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
     
<img
  src={image}
  alt={title}
  loading="lazy"
  className="w-full h-56 object-cover"
/>


      <div className="p-5">
        <p className="text-sm text-blue-600 font-semibold">
          {source}
        </p>

        <h2 className="text-xl font-bold mt-2">
          {title}
        </h2>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <p className="text-sm text-gray-400 mt-4">
          {publishedAt}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;