import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export default function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
  return (
    <motion.div 
      className="relative max-w-xl mx-auto mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </motion.div>
  );
}