import React,{useState ,useEffect}from 'react';
import './home.css'
import MovieBox from './MovieBox.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl,Button } from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=6fc04573e2ea653d40ecdea69e4d31ae";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=6fc04573e2ea653d40ecdea69e4d31ae&query";


 
const Home = () =>{
   const [movies,setMovies]=useState([]);
   const [query,setQuery]=useState('');

   useEffect(() => { 
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data => setMovies(data.results))
   },[]
   )
  

const searchMovie = async(e)=>{
  e.preventDefault();
  try{
    const url=`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=6fc04573e2ea653d40ecdea69e4d31ae`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }
  catch(e){
    console.log(e);
  }
}
const changeHandler=(e)=>{
  setQuery(e.target.value)
}
return(

<>
<Form className="searchbar" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="block"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit" className='srhbtn'>Search</Button>
            </Form>

<div className='bgcl'>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
</div>


</>
    );
}

 export default Home;