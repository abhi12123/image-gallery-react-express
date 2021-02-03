import './components/Slides';
import './App.css';
import Slides from './components/Slides';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

function App() {
  const [images,setImages] = useState([]);
  useEffect(()=>{
    axios.get('/api/v1/image-list').then(res=> setImages(res.data));
  },[])
  return (
    <Router>
      <div className="App"> 
        <h1>Image Gallery</h1>
        <div className="gallery">
          <Switch>
            <Route exact path="/:page_num">
              <Slides images={images}/>
            </Route>
            <Route exact path="/">
              <Redirect to="/1" />
            </Route>
          </Switch>
        </div>
      </div>
      
      <Link to="/1">1</Link>
      <Link to="/2">2</Link>
      <Link to="/3">3</Link>
      <Link to="/4">4</Link>
      <Link to="/5">5</Link>
    </Router>
  );
}

export default App;
