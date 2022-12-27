// import Profile from './components/profile';
import './App.css';
import StoreData from './components/storedData';
import AddProfile from './components/AddProfile';

function App() {
  return (
    <div className="App">
      {/* <Profile /> */}
      <StoreData company="ITravel"/>
      <AddProfile/>
    </div>
  );
}

export default App;
