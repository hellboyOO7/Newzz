import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import StoreProvider from "./context/store-provider";

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
