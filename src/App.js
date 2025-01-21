import './styles/_main.css';
import { modules } from "./modules/index.js";

function App() {
  return (
    <div className="App"> 
      {/* datetime */}
      <modules.Datetime />
      
      {/* promos */}
      <modules.Promos />

      <div id="line-box">
        <div className='line'></div>
      </div>

      {/* news */}
      <modules.News />

      <footer>
        <p>E-mail para contato: 0160santos@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
