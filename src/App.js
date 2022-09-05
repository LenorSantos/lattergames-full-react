import './App.css';
import { useState } from "react";
import {movebtnleftpromo, movebtnrightpromo, btndestaques} from './js/actionbtn.js';
import {dadospromo, dadosdestaques, dadostop} from './js/reqserv.js';

function App() {
  // top
  const [time, settime] = useState([]);
  dadostop((dados) => {
    if (time.length !== dados.length) {
      settime(dados);
      // console.log(dados);
    } 
  });
  var data = new Date(time.data);
  var dataformat = data.toLocaleDateString('pt-br', {timeZone: 'UTC'});
  // top
  
  // promo
  const [pulldados, setpulldados] = useState([]);
  dadospromo((dados) => {
    if (pulldados.length !== dados.length) {
      setpulldados(dados);
      // console.log(dados);
    }
  });
  // promo

  // destaques
  const [pulldestaques, setpulldestaques] = useState([]);
  // btndestaques();
  dadosdestaques((dados) => {
    if (pulldestaques.length !== dados.length) {
      setpulldestaques(dados);
    }
  });
  // destaques

  return (
    <div class="App"> 
      <div className='top'>
        <img src='icons/logotipolow.png' alt='logo'></img>
        <p>Atualizado as {time.hora}h de {dataformat}.</p>
      </div>
      
      <div className='promo'>
        <div className='title'><h1>Promoções</h1></div>
        <div className='container'>
          <button id='btnleft' className='btn' onClick={movebtnleftpromo}><img src='icons/setaesquerda2.png' alt='seta'></img></button>
          <div className='container-scroll scroll-promo '>
            {Array.from(pulldados).map((val) => {
              return (
                <figure className='image'>
                  <a rel="noreferrer" target="_blank" href={val.link}>
                    <p>{val.porcentagem}</p>
                    <img src={val.imgdata} alt="imgpromo"/>
                    <figcaption>{val.titulo}</figcaption>
                    <br/>
                    <figcaption>{val.preco}</figcaption>
                  </a>
                </figure>
              );
            })}
          </div>
          <button id='btnright' className='btn' onClick={movebtnrightpromo}><img src='icons/setadireita.png' alt='seta'></img></button>
        </div>
      </div>

      <div id="line-box">
        <div className='line'></div>
      </div>

      <div className='new'>
        <div className='title-new'>
          <h1>DESTAQUES DO MÊS</h1>
        </div>
        <div className='container-new'>
          {Array.from(pulldestaques).map((val) => {
            return (
              <figure className='image-new'>
                <img src={val.imgdata} alt="imgpng"/>
                <p>{val.texto}</p>
                <button class="btn-new" onClick={btndestaques}>+</button>
                <button class="active" onClick={btndestaques}>-</button>
              </figure>
            );
          })}
        </div>
      </div>

      <footer>
        <p>E-mail para contato: 0160santos@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
