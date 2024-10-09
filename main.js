//1 Introducción a JavaScript

let a=5
let b=10
let c=a+b
console.log(`La suma de a y b es: ${c}`)

let nombre = prompt("¿Cuál es tu nombre?");
console.log(`Hola, ${nombre}!`);

//2 Operadores lógicos y condicionales

a=14
b=10
c=5

if(a>b){
  console.log(`El mayor de los 3 numeros es: ${a}`)
}else{
  console.log(`El mayor de los 3 numeros es: ${b}`)
}

let numero = prompt("Ingrese un numero y te digo si es par o impar")

if(numero % 2 === 0){
  console.log(`El numero ${numero} es par`)
}else{
  console.log(`El numero ${numero} es impar`)
}

//3 Operadores de asignación y bucles
let num=10

while(num>=1){
  console.log(num)
  num--
}

let valor
do{
  valor=prompt("ingrese un valor mayor a 100")
  console.log(`Ingresaste el valor ${valor}`)
}while(valor<=100)

//4 Funciones de JavaScript

const esPar =(num)=>{
  let bandera
  if(num % 2 === 0){
    bandera=true
  }else{
    bandera=false
  }
  return bandera
}

let num1=4
console.log(esPar(num1))

const convertirCelsiusAFahrenheit =(c)=> {
  let f =c*1.8+32
  return f
}

let cel=24
console.log(convertirCelsiusAFahrenheit(cel))

//5 Objetos en JavaScript
let persona = {
  nombre: 'Ana',
  edad: 30,
  ciudad: 'Barcelona',
  cambiarCiudad: function (newCiudad) {
    this.ciudad=newCiudad
    console.log(this.ciudad)
  }
}

console.log(persona)
persona.cambiarCiudad('Madrid')
console.log(persona)

let libro={
  titulo:'El Quijote',
  autor:'Miguel de Cervantes',
  año:1605,
  antiguedad: function(){
    let añoActual= new Date().getFullYear()
    if((añoActual-this.año)>10){
      console.log('El libro es antiguo')
    }else{
      console.log('El libro es reciente')
    }

  }
}

libro.antiguedad()

//6 Arrays

let numeros=[1,2,3,4,5,6,7,8,9,10]

console.log(`Numeros originales: ${numeros}`)

for(let i=0;i<10;i++){
  numeros[i]=numeros[i]*2
}

console.log(`Numeros multiplicados por 2: ${numeros}`)

let pares=[]

for (let i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i);  
  }
}

console.log(`Los primeros 10 numeros pares son: ${pares}`)

//7 Introducción al DOM

const boton1=document.getElementById('button1')
const parrafos=document.getElementsByClassName("parrafos")

const handleStyleButton =()=>{

  for (let i = 0; i < parrafos.length; i++) {
    if (parrafos[i].classList.contains('blueText')) {
      parrafos[i].classList.remove('blueText');
    } else {
      parrafos[i].classList.add('blueText');
    }
  }
}

boton1.addEventListener("click",()=>{
  console.log('Se hizo click')
  handleStyleButton()
})


const boton2=document.getElementById("button2")
  
const getDataInput =()=>{
  const texto=document.getElementById('texto').value
  alert(`Has ingresado: ${texto}`)
}

boton2.addEventListener('click',()=>{
  getDataInput()
})

//8 Eventos en DOM
const elementos = document.querySelectorAll('li');
elementos.forEach(li => {
  li.addEventListener('click', () => {
    console.log(li.textContent)
  })
})

const campo=document.getElementById('campo')
const boton3=document.getElementById('boton3')
const boton4=document.getElementById('boton4')


boton3.addEventListener('click',()=>{
  campo.disabled = true;
})

boton4.addEventListener('click',()=>{
  campo.disabled = false;
})

//9 LocalStorage 

const guardar = document.getElementById('guardar');
const eliminar = document.getElementById('eliminar');
const correo = document.getElementById('correo');
const resultado = document.getElementById('resultado');
const formulario = document.getElementById('formulario');

const guardarDatos = () => {
  localStorage.setItem('correo', JSON.stringify(correo.value)); 
  mostrarCorreoGuardado();
};

const mostrarCorreoGuardado = () => {
  const result = localStorage.getItem('correo'); 
  if (result) {
    resultado.textContent = `Correo guardado: ${JSON.parse(result)}`;
  } else {
    resultado.textContent = ''; 
  }
};

const eliminarDatos = () => {
  localStorage.removeItem('correo'); 
  resultado.textContent = 'Correo eliminado'; 
};

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 
  guardarDatos();
});

eliminar.addEventListener('click', (event) => {
  event.preventDefault();
  eliminarDatos();
});

window.onload = () => {
  mostrarCorreoGuardado(); 
};
