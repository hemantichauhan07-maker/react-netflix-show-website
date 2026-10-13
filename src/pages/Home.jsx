import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryRow from "../components/CategoryRow";

const Home = () => {
    return (
        <div>
            <main>

                <HeroSlider />

                <div className="max-w-6xl mx-auto">

                    <CategoryRow
                        title="Trending Now"
                        endpoint="trending/movie/week"
                    />

                    <CategoryRow
                        title="Top Rated"
                        endpoint="movie/top_rated"
                    />

                    <CategoryRow
                        title="Action"
                        endpoint="discover/movie?with_genres=28"
                    />

                    <CategoryRow
                        title="Comedy"
                        endpoint="discover/movie?with_genres=35"
                    />

                </div>

            </main>
        </div>
    );
};

export default Home;