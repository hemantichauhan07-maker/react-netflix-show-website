import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromTMDB, imageUrl } from "../api/tmdb";

export default function MovieDetail() {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        (async () => {

            try {

                const details = await fetchFromTMDB(`movie/${id}`);

                setMovie(details);

                const v = await fetchFromTMDB(`movie/${id}/videos`);

                setVideos(v.results || []);

            } catch (error) {

                console.error(error);

            }

        })();

    }, [id]);

    if (!movie)
        return (
            <div className="mt-32 text-center">
                Loading.....
            </div>
        );

    const trailer =
        videos.find(
            (v) =>
                v.type === "Trailer" &&
                v.site === "YouTube"
        ) || videos[0];

    return (
        <div>

            <div className="max-w-6xl mx-auto mt-24 px-4">

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="md:col-span-1">

                        <img
                            src={imageUrl(
                                movie.poster_path,
                                "w500"
                            )}
                            alt="Movie"
                            className="rounded-lg"
                        />

                    </div>

                    <div className="md:col-span-2">

                        <h1 className="text-3xl font-bold">
                            {movie.title}
                        </h1>

                        <p className="text-gray-400 mt-1">
                            {movie.tagline}
                        </p>

                        <p className="mt-4">
                            {movie.overview}
                        </p>

                        <div className="mt-6">

                            {trailer ? (

                                <div className="aspect-w-16 aspect-h-9">

                                    <iframe
                                        title="trailer"
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        allowFullScreen
                                        className="w-full h-[400px] rounded"
                                    ></iframe>

                                </div>

                            ) : (

                                <div className="bg-gray-800 p-6 rounded">
                                    No Tailer available
                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}