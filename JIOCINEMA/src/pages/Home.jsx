/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Carocusal from "../components/carocusal/Carocusal";
import Channels from "../components/Channels/Channels";
import Featured from "../components/featured/Featured";
import Header from "../components/header/Header";
import Tags from "../components/tags/Tags";
import Shows from "../components/shows/Shows";

export default function Home() {

    let [movies, setMovies] = useState([]);
    let [featuredMovies, setFeaturedMovies] = useState([]);
    let [actionMovies, setActionMovies] = useState([]);
    let [topMovies, setTopMovies] = useState([]);
    let [englishMovies, setEnglishMovies] = useState([]);
    let [teluguMovies, setTeluguMovies] = useState([]);

    useEffect(async () => {
        
        try {
        
            let movieResponse = await fetch("http://localhost:3000/movies");
            let moviesData = await movieResponse.json()
            

            //fiter for all movies
            setMovies(moviesData);

            // filter for featured movies
            let featMovies = moviesData.filter((movie) => { return movie.featured === true });
            // console.log(featMovies)
            setFeaturedMovies(featMovies.slice(0,4))

            //filter for action movies
            let actMovies = moviesData.filter((movie) => { return movie.genre.includes("Action") });
            // console.log(actMovies)
            setActionMovies(actMovies.slice(0,6))

            //filter for English movies
            let engMovies = moviesData.filter((movie) => { return movie.language === "English" });
            // console.log(engMovies)
            setEnglishMovies(engMovies.slice(0,6))

            //filter for Top rated movies
            let topMovies = moviesData.filter((movie) => { return movie.imdb > 8.5 });
            // console.log(topMovies)
            setTopMovies(topMovies.slice(0, 6))
            
            let telMovies = moviesData.filter((movie) => { return movie.language === "Telugu" });
            // console.log(topMovies)
            setTeluguMovies(telMovies.slice(0,6))

            

        } catch (err) {
            console.log(err)
        }
    },[])

    return (
        <>
            <Header movies={ movies } />
            <Tags />
            <Carocusal />
            <Channels />
            <Featured movies={featuredMovies} />



            <Shows title="Telugu Movies" movies={ teluguMovies } />
            <Shows title="Action Movies" movies={ actionMovies } />
            <Shows title="Top Rated movies" movies={ topMovies } />
            <Shows title="English movies" movies={ englishMovies } /> 
        </>
    )
}