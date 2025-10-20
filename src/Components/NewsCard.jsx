import { CiBookmark } from "react-icons/ci";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;

  return (
    <div className="bg-base-100 shadow-md rounded-2xl p-4 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 bg-base-300 p-2">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">{author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark />
          <button className="text-gray-500 hover:text-gray-700">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mb-3 leading-snug">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="rounded-xl mb-3 w-full object-cover"
      />

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3">
        {details.length > 150 ? (
          <>
            {details.slice(0, 150)}...
            <span className="text-orange-500 cursor-pointer ml-1">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-3">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(rating?.number)
                  ? "fill-orange-500"
                  : "fill-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-gray-700 text-sm">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
