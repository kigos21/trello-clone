// eslint-disable-next-line react/prop-types
export default function Board({ title, className }) {
  return (
    <div
      className={
        "aspect-video cursor-pointer rounded-md px-3 py-2 font-bold " +
        className
      }
    >
      <span className="block max-w-[85%]">{title}</span>
    </div>
  );
}
