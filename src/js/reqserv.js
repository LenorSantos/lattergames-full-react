import axios from "axios";

export function dadostop(dados) {
  axios.get("http://localhost:3001/pulldatetime").then((result) => {
    dados(result.data);
  });
}

export function dadosproducts(dados) {
  axios.get("http://localhost:3001/reqproducts").then((result) => {
    dados(result.data);
  });
}

export function dadosnews(dados) {
  axios.get("http://localhost:3001/pullnews").then((result) => {
    dados(result.data);
  });
}