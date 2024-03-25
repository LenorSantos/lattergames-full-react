import { useState, useEffect } from "react";
import { getServices } from "../services/getService";
import { movebtnleftproducts, movebtnrightproducts } from "../utils/actionbtn";

export default function Promos() {
  const [promos, setPromos] = useState([]);
  useEffect(() => {
    getServices.promosService().then(result => {
      setPromos(result.data);
    }).catch(err => {
      // console.log(err);
      // alert("erro ao requisitar as promoções");
    });
  }, []);

  return (
    <div className='products'>
      <div className='title'><h1>Promoções</h1></div>
      <div className='container'>
        <button id='btnleft' className='btn' onClick={movebtnleftproducts}><img src='icons/setaesquerda2.png' alt='seta'></img></button>
        <div className='container-scroll scroll-products '>
          {Array.from(promos).map((val) => {
            return (
              <figure className='image'>
                <a rel="noreferrer" target="_blank" href={val.link}>
                  <p>{val.percent}</p>
                  <img src={val.imgdata} alt="imgproducts" />
                  <figcaption>{val.title}</figcaption>
                  <br />
                  <figcaption>{val.price}</figcaption>
                </a>
              </figure>
            );
          })}
        </div>
        <button id='btnright' className='btn' onClick={movebtnrightproducts}><img src='icons/setadireita.png' alt='seta'></img></button>
      </div>
    </div>
  );
}