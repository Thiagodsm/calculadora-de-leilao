import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Providers from "./components/Layout/Provider";
import Home from "./pages/Home";
import { SimulatorPage } from "./features/simulator/SimulatorPage";
import About from "./pages/About";
import BlogListPage from "./features/blog/components/BlogListPage";
import BlogPostPage from "./features/blog/components/BlogPostPage";
import NotFound from "./components/NotFound";
import { adsenseConfig } from "./config/adsense";

function App() {
  return (
    <Providers>
      <Helmet>
        <meta name="google-adsense-account" content="ca-pub-4367506788753041" />
        {adsenseConfig.enabled && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.clientId}`}
            crossOrigin="anonymous"
          />
        )}
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<MainLayout />}>
            <Route path="/simulador" element={<SimulatorPage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
