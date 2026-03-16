import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import LearnAOS from './components/LearnAOS';
import Crud from './components/Crud';
import LearnUseState from './components/LearnUseState';


function App() {
  return (
    <div className="App">
     <HomePage/>
     <LearnAOS/>
     <Crud/>
     <LearnUseState/>
    </div>
  );
}

export default App;
