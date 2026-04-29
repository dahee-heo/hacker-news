import { Routes, Route } from "react-router-dom";
import News from "./pages/News";
import NewsDetail from "./pages/News/detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/news/:id" element={<NewsDetail />} />
    </Routes>
  );
}

export default App;
