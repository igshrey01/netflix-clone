import React from 'react';
import './Home.css';
import Nav from '../Nav.js'
import Banner from '../Banner.js'
import Row from '../Row.js'
import requests from '../request';
function Home() {
    return (
        <div className="home">
            { /* Nav */ } 
            <Nav/>
            
            {/* Banner */}
            <Banner/>

            {/* Row */} 
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
            
        </div>
    )
}

export default Home
