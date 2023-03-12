import { useState, useEffect } from "react";
import Header from "./component/Header";
import Movies from "./component/Movies";
import Bottom from "./component/Bottom";
import Card from "./component/card";
import data from "./data";
import Hero from "./component/Hero";
import axios from "axios";


const URL = "https://api.themoviedb.org/3";
const API_KEY = "1fc1a1efd1f37d6ea1cb8ead71d61e51";

const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
}) 

export const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};
function App() {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // Load Originals
    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));

    // Load Trending
    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTrending(res.data.results));

    // Load Now Playing
    axios
      .get(`${URL}${endpoints.now_playing}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setNowPlaying(res.data.results));

    // Load Popular
    axios
      .get(`${URL}${endpoints.popular}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setPopular(res.data.results));

    // Load Top Rated
    axios
      .get(`${URL}${endpoints.top_rated}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTopRated(res.data.results));

    // Load Upcoming
    axios
      .get(`${URL}${endpoints.upcoming}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setUpcoming(res.data.results));
  }, []);

  useEffect(() => console.log(originals), [originals]);
  return (
    <>
      <Header />
      <div className="rand">
      <Hero movie={originals[Math.floor(Math.random() * originals.length)]} />
      </div>
      <div>
      <section className="cards-list">
           {cards}
      </section>
      <div className="movie">
      </div>
      {/* <Movies title="Originals" movies={originals} /> */}
      <Movies title="Trending" movies={trending} />
      <Movies title="Now Playing" movies={nowPlaying} />
      <Movies title="Popular" movies={popular} />
      <Movies title="Top Rated" movies={topRated} />
      <Movies title="Upcoming" movies={upcoming} />
      <Bottom />
      </div>
    </>
  );
}

export default App;

//     const cards = data.map(item => {
//         return (
//             <Card
//                 key={item.id}
//                 {...item}
                
//             />
//         )
//     }) 

//     return(<div>
//         <Header />
//         <Center />
//         <section className="cards-list">
//            {cards}
//         </section>
//            </div> 
//     )
// }