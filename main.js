import './style.css';
import { Dog } from './dog.js';
import confetti from 'canvas-confetti'

console.log('Hello Vite!!!');


const ariel = new Dog('Ariel', 'Border-collie', 18, 'male', ['black', 'white']);

console.log(ariel)

ariel.sayHello();

function fire(){
  console.log('booom!!!')
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

}

const fireBtn= document.getElementById('fire-btn');

fireBtn.addEventListener('click',fire);