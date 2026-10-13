import {
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-auto">

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/movie/:id"
                    element={<MovieDetail />}
                />

            </Routes>

        </div>
    );
}