import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { lazy, Suspense, useEffect } from "react";

// Lazy load non-critical pages for faster initial load
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About }))
);
const Products = lazy(() =>
  import("./pages/Products").then((m) => ({ default: m.Products }))
);
const Events = lazy(() =>
  import("./pages/Events").then((m) => ({ default: m.Events }))
);
const Blog = lazy(() =>
  import("./pages/Blog").then((m) => ({ default: m.Blog }))
);
const BlogPost = lazy(() =>
  import("./pages/BlogPost").then((m) => ({ default: m.BlogPost }))
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact }))
);
const Careers = lazy(() =>
  import("./pages/Careers").then((m) => ({ default: m.Careers }))
);

// Loading spinner for lazy-loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Handle redirects from 404.html for static hosting (GitHub Pages, etc.)
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      // Clean the URL and navigate to the intended path
      window.history.replaceState(null, "", redirect);
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RedirectHandler />
      <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
