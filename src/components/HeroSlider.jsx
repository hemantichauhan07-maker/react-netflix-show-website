import { useEffect, useState } from "react";
import { fetchFromTMDB, imageUrl } from "../api/tmdb";
import { Link } from "react-router-dom";

export default function HeroSlider() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetchFromTMDB(
                "trending/movie/week"
            );

            setItems(data.results.slice(0, 5));
        })();
    }, []);

    return (
        <div>
            {/* account for fixed navbar */}

            <div className="relative h-[60vh] md:h-[75vh] overflow-hidden rounded-b-lg">

                {items.map((item, i) => (
                    <div
                        key={item.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${
                            i === 0
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                    >

                        <img
                            src={imageUrl(
                                item.backdrop_path,
                                "original"
                            )}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                        <div className="max-w-6xl mx-auto h-full flex items-center p-6">

                            <div className="max-w-2xl">

                                <h2 className="text-3xl md:text-5xl font-bold">
                                    {item.title}
                                </h2>

                                <p className="mt-4 text-sm md:text-base text-gray-200">
                                    {item.overview}
                                </p>

                                <div className="mt-6 flex gap-3">

                                    <Link
                                        to={`/movie/${item.id}`}
                                        className="bg-white text-black px-5 py-2 rounded font-medium"
                                    >
                                        Play
                                    </Link>

                                    <button
                                        className="bg-gray-700 px-5 py-2 rounded"
                                    >
                                        My List
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}