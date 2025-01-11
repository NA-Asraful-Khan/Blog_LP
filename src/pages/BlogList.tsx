import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetPostsQuery } from "../store/services/blogApi";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";

export default function BlogList() {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useState(10);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice(0, displayCount);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="md:flex justify-between items-center text-center mb-8">
        <h3 className="text-4xl">Placeholder Posts</h3>
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>

      <div className="min-h-screen">
        <InfiniteScroll
          dataLength={displayedPosts.length}
          next={() => {
            setDisplayCount((prev) => Math.min(prev + 4, filteredPosts.length));
          }}
          hasMore={displayedPosts.length < filteredPosts.length}
          loader={
            <div className="col-span-full flex justify-center py-8">
              <motion.p
                className="text-gray-600 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                More Posts Loading . . .
              </motion.p>
            </div>
          }
          scrollThreshold={0.8}
          style={{ overflow: "auto", height: "auto" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 auto-rows-fr"
        >
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.3 },
                  layout: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
              >
                <BlogCard post={post} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </InfiniteScroll>
      </div>
    </div>
  );
}
