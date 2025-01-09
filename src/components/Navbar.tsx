import { Bell } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { motion } from 'framer-motion';

export default function Navbar() {
  const notificationCount = useSelector((state: RootState) => state.notification.count);

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img src="/synesis-logo.png" alt="Synesis IT" className="h-8" />
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600" />
              {notificationCount > 0 && (
                <motion.span 
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {notificationCount}
                </motion.span>
              )}
            </div>
            <Link to="/signin" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Sign in
            </Link>
            <Link to="/register" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Register
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}