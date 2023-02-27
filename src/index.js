import image from './home-image.jpg';
console.log("Test temp")

const home = ()=>{
    const content = document.querySelector('#content');
    content.innerHTML = ""
    let head = document.createElement('h1');
    head.textContent = "Restaurant Page";
    let img = new Image();
    img.src = image;
    img.setAttribute('height', '500px')
    let p = document.createElement('p');
    p.textContent = "Best Restaurant on planet ig"
    content.appendChild(head);
    content.appendChild(img);
    content.appendChild(p);
};

const menu = ()=>{
    const content = document.querySelector('#content');
    content.innerHTML = ""
    let item1  = document.createElement('h2');
    item1.textContent = "Pasta"
    let item2 = document.createElement("h2");
    item2.textContent = "Pizza"
    content.appendChild(item1)
    content.appendChild(item2);
}

home();
const home_button = document.querySelector('#home');
const menu_button = document.querySelector('#menu');

home_button.addEventListener('click', home);
menu_button.addEventListener('click', menu);

