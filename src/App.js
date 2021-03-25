import './App.css';
import A from './components/A';
import Child1 from './components/Child1.js';
import Provider from './Provider';

function App(props) {
  console.log('App is rendered');
  return (
    <div className="App">
      <header className="App-header">
      <Provider>
        <A color = 'black'/>
      </Provider>
      <Child1 color = 'purple'/>
      </header>
    </div>
  );
}

export default App;
