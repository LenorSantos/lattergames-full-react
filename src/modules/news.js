import { useState, useEffect } from "react";
import { getServices } from "../services/getService";
import { btnnews } from "../utils/actionbtn";

export default function News() {
  const [news, setNews] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getServices.newsService().then(result => {
      setNews(result.data);
      result.data.length > 0 ? setShow(true) : setShow(false);
    }).catch(err => {
      // console.log(err);
    }).finally(() => btnnews());
  }, []);

  return (
    <div className='new'>
      <div className='title-new'>
        <h1>DESTAQUES DO MÊS</h1>
      </div>
      {show ? (
        <div className='container-new'>
        {Array.from(news).map((val, index) => {
          return (
            <figure className='image-new' key={index}>
              <img src={val.imgdata} alt="imgpng" />
              <div>
                {/*  */}
              </div>
              <p>{val.text}</p>
              <button className="btn-new" onClick={btnnews}>+</button>
              <button className="active" onClick={btnnews}>-</button>
            </figure>
          );
        })}
      </div>
      ) : (
        <div className='container-new'>
          <p>Sem destaques</p>
        </div>
      )}
      
    </div>
  );
}