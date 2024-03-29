import React from 'react';
import {Route} from 'react-router-dom'
import './App.css'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import DogsListContainer from './components/DogsListContainer';
import Main from './components/Main'
import Game1Container from './components/Game1Container';
import Game2Container from './components/Game2Container'
import Game3Container from './components/Game3Container'
import Credits from './components/Credits'
import German from './components/German'

function App() {
  return (
    <main>
      <div className="App">
        <Route exact path="/dogs" component = {DogsListContainer} />
        <Route path="/dog-breeds/:breed" component = {DogBreedImagesContainer} />
        <Route exact path = "/" component = {Main}></Route>
        <Route path = '/Game1' component = {Game1Container}></Route>
        <Route path = '/Credits' component = {Credits}></Route>
        <Route path = '/Game2' component = {Game2Container}></Route>
        <Route path = '/Game3' component = {Game3Container}></Route>
        <Route path = "/German" component = {German} />
      </div>
    </main>
  );
}

export default App;
