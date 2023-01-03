import './App.css';
import image from './basket.png';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div>
	<div className="App">
    <div className="container">
      <h1>Grocery List</h1>
    </div>
    <GroceryList/>
    <div className="container">
      <img src={ image } width="200" alt="Shopping cart" className="image"/>
    </div>
	</div>
  
  <footer>
      <p>All materials were used for educational purposes.</p> 
  </footer>
  </div>
  );
}

export default App;
