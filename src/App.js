import SearchInput from './components/SearchInput';
import './App.css';
import CardList from './components/CardList';
import { useState } from 'react';
import Axios from 'axios';
import CardInfo from './components/CardInfo';

export const API_KEY = "47f834e3";

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [selectedMovie,onMovieSelect]=useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);


  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect('');
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 1000);
    updateTimeoutId(timeout);
  };

  return (
    <div className="App">
      <h1 className="app-title">Movie Hub</h1>

      <SearchInput onTextChange={onTextChange} />

      {selectedMovie && <CardInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      
      <CardList movieList={movieList} onMovieSelect={onMovieSelect}/>
    </div>
  );
}

export default App;
