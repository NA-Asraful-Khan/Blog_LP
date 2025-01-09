import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../store/slices/notificationSlice';
import type { Post } from '../store/services/blogApi';

interface BlogCardProps {
  post: Post;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
        <h2 className="mt-2 text-xl font-semibold text-gray-900 flex-grow">{post.title}</h2>
        <p className="mt-2 text-gray-600 line-clamp-3">{post.content}</p>
        <div className="mt-4 flex items-center justify-between pt-4">
          <span className="text-sm text-gray-500">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
          <Link 
            to={`/post/${post.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
            onClick={handleClick}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}