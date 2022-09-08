import axios from "axios";

export function dadostop(dados) {
  axios.get("http://localhost:3001/pulltoppage").then((result) => {
    dados(result.data);
  });
}

export function dadospromo(dados) {
  axios.get("http://localhost:3001/pullpromo").then((result) => {
    dados(result.data);
  });
}

export function dadosdestaques(dados) {
  axios.get("http://localhost:3001/pulldestaques").then((result) => {
    dados(result.data);
  });
}