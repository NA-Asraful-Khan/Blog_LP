import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../store/slices/notificationSlice";
import type { Post } from "../store/services/blogApi";
import { CalendarDaysIcon } from "lucide-react";

interface BlogCardProps {
  post: Post;
  index: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BlogCard({ post, index }: BlogCardProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  function convertToReadableDate(publish: string) {
    // Parse the date part
    const [day, month, year] = publish.split(" ")[0].split("/");

    // Create a Date object
    const date = new Date(`${year}-${month}-${day}`);

    // Get the month name, day, and year
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-sm text-black flex items-center justify-center gap-1">
            <CalendarDaysIcon />
            {convertToReadableDate(post.publishedAt)}
          </span>
          <span className="text-sm text-black font-semibold">
            {post.category}
          </span>
        </div>
        <h2 className="mt-2 text-xl font-semibold text-gray-900 flex-grow">
          {post.title.length > 40
            ? `${post.title.substring(0, 40)}...`
            : post.title}
        </h2>
        <div>
          <span className="mt-2 text-gray-600">
            {post.content.length > 200
              ? `${post.content.substring(0, 200)}....`
              : post.content}
          </span>
          <Link
            to={`/post/${post.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium ml-2"
            onClick={handleClick}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
