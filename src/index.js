
import './aboutStyle.css';
console.log("Test temp")

const home = ()=>{
    const content = document.querySelector('#content');
    content.innerHTML = ""
    let head = document.createElement('h1');
    head.textContent = "About Us";
    head.classList.add('head')
    let p = document.createElement('p');
    p.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus mauris vel ipsum tincidunt tincidunt. Phasellus sem turpis, vehicula eu nunc id, dictum auctor libero. Sed laoreet pellentesque metus non varius. Etiam tellus magna, lacinia vitae aliquet nec, auctor vel tellus. Nullam id volutpat sapien, et tincidunt sapien. Pellentesque vitae tristique urna. Nullam auctor mi vitae lorem viverra fermentum. Nunc sed sapien et nulla tempus auctor. Proin sit amet ex in ligula tincidunt pellentesque. Ut diam velit, blandit at augue sit amet, sollicitudin porttitor lorem. Nullam pharetra posuere justo, sed tempus velit rhoncus non. Nam et scelerisque metus. Sed ut. `
    content.appendChild(head);
    content.appendChild(p);
};

const menu = ()=>{
    const content = document.querySelector('#content');
    content.innerHTML = ""
    
}

home();
const home_button = document.querySelector('#home');
const menu_button = document.querySelector('#menu');

home_button.addEventListener('click', home);
menu_button.addEventListener('click', menu);

