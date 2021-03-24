import './App.css';
import A from './components/A';
import Child1 from './components/Child1.js';
import MyFirstContext from './MyFirstContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <A/>
        <Child1/>
      </header>
    </div>
  );
}

export default App;
