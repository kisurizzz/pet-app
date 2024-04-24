import logo from './logo.svg';
import './App.css';
import Pet from './Components/Pet'
import PetList from './Components/PetList'

let pets = [
  { name: 'Buddy', type: 'Dog', age: 5, image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Mittens', type: 'Cat', age: 3, image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Goldie', type: 'Dog', age: 1, image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Bosco Pro Max', type: 'Dog', age: 1, image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { name: 'Fish Fingers', type: 'Fish', age: 1, image: 'https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
]


function App() {
  return (
    <div className="App">
      <h1>Our Amazing Pets</h1>
      <PetList pets={pets} /> 
    </div>
  );
}

export default App;




