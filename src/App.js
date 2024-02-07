import logo from './logo.svg';
import './App.css';
import Basic from './components/Basic';
import Controlled from './components/Controlled';
import Disabled from './components/Disabled';
import Invalid from './components/Invalid';
import Resize from './components/Resize';

function App() {
  return (
    <div className="App" style={{
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
      gap: "12px",
      margin: "auto",
      padding: "40px"
    }}>
      <Basic/>
      <Resize/>
      <Controlled/>
      <Disabled/>
      <Invalid/>
      
    </div>
  );
}

export default App;
