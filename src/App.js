import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cliches from './components/Cliches';
import AdditionalCliches from './components/AdditionalCliches';
import MyMind from './components/MyMind';
import SoberCards from './components/SoberCards';
import BBCards from './components/BBCards';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Cliches} path='/cliches' />
        <Route component={AdditionalCliches} path='/additionalcliches' />
        <Route component={MyMind} path='/mymind' />
        <Route component={SoberCards} path='/sobercards' />
        <Route component={BBCards} path='/bbcards' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
