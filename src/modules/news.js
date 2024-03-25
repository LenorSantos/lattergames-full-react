import { useState, useEffect } from "react";
import { getServices } from "../services/getService";
import { btnnews } from "../utils/actionbtn";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getServices.newsService().then(result => {
      setNews(result.data);
    }).catch(err => {
      // console.log(err);
    });
  }, []);

  return (
    <div className='new'>
      <div className='title-new'>
        <h1>DESTAQUES DO MÊS</h1>
      </div>
      <div className='container-new'>
        {Array.from(news).map((val) => {
          return (
            <figure className='image-new'>
              <img src={val.imgdata} alt="imgpng" />
              <p>{val.text}</p>
              <button class="btn-new" onClick={btnnews}>+</button>
              <button class="active" onClick={btnnews}>-</button>
            </figure>
          );
        })}
      </div>
    </div>
  );
}