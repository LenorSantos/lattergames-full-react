import { useState, useEffect } from "react";
import { getServices } from "../services/getService";

export default function Datetime() {
  const [time, settime] = useState([]);
  useEffect(() => {
    getServices.datetimeService().then(result => {
      settime(result.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  var data = new Date(time.date);
  var dataformat = data.toLocaleDateString('pt-br', { timeZone: 'UTC' });

  return (
    <div className='top'>
      <img src='icons/logotipolow.png' alt='logo'></img>
      {/* <p id="logo">Latter Games</p> */}
      <p id="datetime">Atualizado as {time.time}h de {dataformat}.</p>
    </div>
  );
}