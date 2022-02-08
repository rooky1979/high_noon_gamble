import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cliches from './components/Cliches';
import AdditionalCliches from './components/AdditionalCliches';
import MyMind from './components/MyMind';
import SoberCards from './components/SoberCards';
import BBCards from './components/BBCards';
import NavBar from './components/NavBar';
import Tools from './components/Tools';
import Readings from './components/Readings';
import Format from './components/Format';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Tools} path='/tools' exact />
        <Route component={Readings} path='/readings' />
        <Route component={Cliches} path='/cliches' />
        <Route component={Format} path='/format' />
        <Route component={Chat} path='/chat' />
        <Route component={AdditionalCliches} path='/additionalcliches' />
        <Route component={MyMind} path='/mymind' />
        <Route component={SoberCards} path='/sobercards' />
        <Route component={BBCards} path='/bbcards' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
