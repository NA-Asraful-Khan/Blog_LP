import { BellRing } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { motion } from "framer-motion";

export default function Navbar() {
  const notificationCount = useSelector(
    (state: RootState) => state.notification.count
  );

  return (
    <motion.nav
      className="sticky top-0 w-full bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1983px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/synesis-logo.png"
              alt="Synesis IT"
              className="max-h-12"
            />
          </Link>

          <div className="flex items-center gap-4">
            <div className="relative bg-[#D9D9D933] p-4 rounded text-black">
              <div className="flex justify-center items-center">
                <span className="mr-2">Bell Counter</span>
                <span>
                  <BellRing className="h-6 w-6" />
                  {notificationCount > 0 && (
                    <motion.span
                      className="absolute -top-0 -right-0  text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      {notificationCount}
                    </motion.span>
                  )}
                </span>
              </div>
            </div>
            <button className="text-[#1E1E1E] hover:text-black h-[32px] w-[152px] bg-[#E3E3E3] border border-[#767676] rounded-md">
              Sign in
            </button>
            <button className="text-[#F5F5F5] hover:text-white h-[32px] w-[152px] bg-[#2C2C2C] border border-[#2C2C2C] rounded-md">
              Register
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
