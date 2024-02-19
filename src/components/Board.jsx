import { GoStar, GoStarFill } from "react-icons/go";

// eslint-disable-next-line react/prop-types
export default function Board({ title, className, isFavorite, handleClick }) {
  return (
    // conditional rendering
    <div className="relative">
      {isFavorite != null && (
        <button
          className="absolute right-3 top-2"
          onClick={() => handleClick()}
        >
          {isFavorite ? <GoStarFill /> : <GoStar className="text-lg" />}
        </button>
      )}
      <div
        className={
          "aspect-video cursor-pointer rounded-md px-3 py-2 font-bold " +
          className
        }
      >
        <span className="block max-w-[85%]">{title}</span>
      </div>
    </div>
  );
}
