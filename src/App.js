import logo from './logo.svg';
import './App.css';
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {Header} from "../src/pages/main/header"
import { RouterApps } from './routes';

function App() {
  return (
    <>     
      <div style={{padding:'1em'}}>
        <Header></Header>
        <RouterApps/>
      </div>
    </>
  );
}

export default App;
