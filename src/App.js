import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { OpenWeatherProvider } from "./openweather/OpenWeatherContext";


function App() {
  return (
    <OpenWeatherProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </OpenWeatherProvider>
  );
}

export default App;
