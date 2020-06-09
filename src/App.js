import React from 'react';
import Search from './components/Search';
import ListOfMovies from './components/ListOfMovies'


function App() {
  return (
    <div className="App">  
     <header>
       <h1>Movie Search App</h1>
     </header>
     <Search />
     <ListOfMovies />
    </div>
  );
}

export default App;
