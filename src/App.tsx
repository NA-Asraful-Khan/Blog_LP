import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen max-w-[1983px] mx-auto bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
