import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useGetPostQuery } from '../store/services/blogApi';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading } = useGetPostQuery(id || '');

  if (isLoading || !post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
      />
      
      <div className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          <span>•</span>
          <span className="text-blue-600">{post.category}</span>
        </div>

        <div className="text-gray-700 leading-relaxed mb-12">
          {post.content}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6">Latest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  {'★'.repeat(4)}{'☆'.repeat(1)}
                </div>
                <h3 className="font-semibold mb-2">Great Article!</h3>
                <p className="text-gray-600 mb-4">Really enjoyed reading this piece. Very informative and well-written.</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">John Doe</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 mt-12">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Follow the latest trends</h2>
            <p className="text-gray-600 mb-6">With our daily newsletter</p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}