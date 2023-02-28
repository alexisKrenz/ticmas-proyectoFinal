const personalData = document.getElementById('datosPersonales');
const desplegable = document.getElementsByClassName('desplegable');
const botonNavBar = document.getElementsByClassName('viajeRapido');
const formacion = document.querySelectorAll('#formacion');
const experiencia = document.querySelectorAll('#experiencia');
const idiomas = document.querySelectorAll('#idiomas');
const otros = document.querySelectorAll('#otros');
const darkmode = document.getElementsByClassName("darkmode");

let isDark = true;

const changeToDarkMode = () => {

  if (isDark) {
    document.body.style.backgroundColor = "#e0e4d4";
    document.body.style.color = "#000";
    darkmode[0].style.backgroundColor = "#52524d";
    darkmode[0].style.color = "#e0e4d4";
    isDark = false;
  }
  else {
    document.body.style.backgroundColor = "#131111";
    document.body.style.color = "#a7a5a5";
    darkmode[0].style.backgroundColor = "#e4e725";
    darkmode[0].style.color = "#000";
    isDark = true;
  }
};
darkmode[0].addEventListener('click', changeToDarkMode);


const solicitarDatos = async () => {
  const resp = await fetch('https://randomuser.me/api/')
  const data = await resp.json()
  let datos = data.results;
  
  datos.forEach((element) => {
    personalData.innerHTML = `
    <div class="seccion1">
        <div>
          <img src="${element.picture.large}" alt="cv picture">
        </div>
        <ul>
          <li class="nombre">${element.name.last}, ${element.name.first}</li>
          <li>Edad: ${element.dob.age} años</li>
          <li>Tel: ${element.cell}</li>
          <li>Correo: ${element.email}</li>
          <li>Direccion: ${element.location.street.name}, ${element.location.street.number}</li>
        </ul>
    </div>
    ` 
  });
};
solicitarDatos();

let formOpen = false;
let expOpen = false;
let idiOpen = false;
let otrOpen = false;

formacion[0].addEventListener('click', ()=> {

  if (formOpen == false) {
    formacion[0].style.height = "auto";
    formacion[0].style.width = "100%";
    formacion[0].innerHTML = 
    `
    <h4>Formacion<h4>
      <div class="contenido">
        <div>
          <h4>institucion</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, est cupiditate sapiente culpa
              obcaecati consequatur in itaque tempora harum, cum expedita nesciunt magnam esse odit iusto,
              provident mollitia odio velit!</p>
        </div>
        <div>
            <h4>institucion</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, est cupiditate sapiente culpa
              obcaecati consequatur in itaque tempora harum, cum expedita nesciunt magnam esse odit iusto,
              provident mollitia odio velit!</p>
        </div>
        <div>
            <h4>institucion</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, est cupiditate sapiente culpa
              obcaecati consequatur in itaque tempora harum, cum expedita nesciunt magnam esse odit iusto,
              provident mollitia odio velit!</p>
        </div>
      </div>
  `
  formOpen = true;
  }
  else {
    formOpen = false;
    formacion[0].style.height = "100px";
    formacion[0].style.width = "50%";
    formacion[0].innerHTML = `<h4>Formacion<h4> 
    <p>Expandir >></p>`
  }
});


experiencia[0].addEventListener('click', ()=> {

  if (expOpen == false) {
    experiencia[0].style.height = "auto";
    experiencia[0].style.width = "100%";
    experiencia[0].innerHTML = 
    `
    <h4>Experiencia<h4>
    <div class="contenido">
      <div>
        <h4>Empresa</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, est cupiditate sapiente culpa
            obcaecati consequatur in itaque tempora harum, cum expedita nesciunt magnam esse odit iusto,
            provident mollitia odio velit!</p>
      </div>
      <div>
          <h4>Empresa</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, est cupiditate sapiente culpa
            obcaecati consequatur in itaque tempora harum, cum expedita nesciunt magnam esse odit iusto,
            provident mollitia odio velit!</p>
      </div>
      <div>
          <h4>Empresa</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, est cupiditate sapiente culpa
            obcaecati consequatur in itaque tempora harum, cum expedita nesciunt magnam esse odit iusto,
            provident mollitia odio velit!</p>
      </div>
    </div>
    `
    expOpen = true;
  }
  else {
    expOpen = false;
    experiencia[0].style.height = "100px";
    experiencia[0].style.width = "50%";
    experiencia[0].innerHTML = `<h4>Experiencia<h4>
    <p>Expandir >></p>`
  }
});


idiomas[0].addEventListener('click', ()=> {
  if (idiOpen == false) {
    idiomas[0].style.height = "auto";
    idiomas[0].style.width = "100%";
    idiomas[0].innerHTML = `
    <h4>Idiomas<h4>
    <div class="contenido">
      <ul>
        <li>Ingles - nivel avanzado</li>
        <li>Aleman - nivel avanzado</li>
        <li>Frances - nivel basico</li>
        <li>Chino - nivel basico</li>
        <li>Latin - nivel basico</li>
      </ul>
    </div>
`
    idiOpen = true;
  }
  else {
    idiOpen = false;
    idiomas[0].style.height = "100px";
    idiomas[0].style.width = "50%";
    idiomas[0].innerHTML = `<h4>Idiomas<h4>
    <p>Expandir >></p>`
  }
});

otros[0].addEventListener('click', ()=> {
  if (otrOpen == false) {
    otros[0].style.height = "auto";
    otros[0].style.width = "100%";
    otros[0].innerHTML =
    otros[0].innerHTML = `

    <h4>Otras Aptitudes<h4>
    <div class="contenido">
      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>ReactJS</li>
        <li>Linux</li>
        <li>Git</li>
      </ul>
    </div>
    `
  otrOpen = true;
  }
  else {
    otrOpen = false;
    otros[0].style.height = "100px";
    otros[0].style.width = "50%";
    otros[0].innerHTML = `<h4>Otras Aptitudes<h4>
    <p>Expandir >></p>`
  }
});





