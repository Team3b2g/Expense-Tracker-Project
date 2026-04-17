import { useState } from "react";
import Landing from "./pages/Landing";

export default function App() {
  const [showNews, setShowNews] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <Landing
      showNews={showNews}
      setShowNews={setShowNews}
      showBlogs={showBlogs}
      setShowBlogs={setShowBlogs}
    />
  );
}