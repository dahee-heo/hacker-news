import { Routes, Route } from "react-router-dom";
import News from "./pages/News";
import NewsDetail from "./pages/News/detail";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
