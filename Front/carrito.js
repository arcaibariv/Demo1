const items = document.getElementById('items');
const templateCard = document.getElementById('modelo-carta').content;
const fragment = document.createDocumentFragment();
//const db = require('/db/db')



document.addEventListener('DOMContentLoaded', () => {
  fetchData()
}) 


items.addEventListener('click', e => {
  if (e.target.classList.contains('btn-dark')){
    let titulo = e.target.parentElement.querySelector('h5').textContent
    let precio = e.target.parentElement.querySelector('p').textContent
    let id = e.target.parentElement.querySelector('.btn-dark').dataset.id

    addcarrito(titulo,id,precio);
  }
  e.stopPropagation()
})

const addcarrito = async (title,ID,price) => {
  const data = {
    nombre: title,
    id: ID,
    precio: price
  }
  console.log(data.title)

  fetch("http://localhost:3000/nuevo/", {
    method: "POST",
    body: data
  })
  .then(response => response.json())

  .then(resp => console.log(resp));

}
const getCarrtito = async () => {
  const resp = await fetch("http://localhost:3000");
  const data = await resp.json()
  console.log(data)
}


const fetchData = async () => {
  try {
    const res = await fetch('https://api.mercadolibre.com/sites/MLM/search?category=MLM1058');
    const data = await res.json();
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
}




const pintarCards = (data) => {
  let contador = 0;
  data.results.forEach(producto => {
    if (contador < 10) {
      templateCard.querySelector('h5').textContent = producto.title;
      templateCard.querySelector('img').setAttribute("src",producto.thumbnail);
      templateCard.querySelector('.btn-dark').dataset.id = producto.id;
      templateCard.querySelector('p').textContent =  producto.price;
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
      contador++
    } 
  });
  items.appendChild(fragment);
}

