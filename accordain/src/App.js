import logo from './logo.svg';
import './App.css';
import Accordian from './components/Accordains';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
     <Accordian />
     <RandomColor />
     <StarRating />
     <ImageSlider />
    </div>
  );
}

export default App;
