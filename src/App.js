import React from 'react';
import {Route} from 'react-router-dom'
import './App.css'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import DogsListContainer from './components/DogsListContainer';
import MainPage from './components/MainPage'

function App() {
  return (
    <main>
      <div className="App">
        <Route exact path="/dogs" component = {DogsListContainer} />
        <Route path="/dog-breeds/:breed" component = {DogBreedImagesContainer} />
        <Route exact path = "/" component = {MainPage}></Route>

      </div>
    </main>
  );
}

export default App;
