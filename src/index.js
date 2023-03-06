

const home_button = document.querySelector('#home');
const menu_button = document.querySelector('#menu');
const contact_button = document.querySelector('#contact');

const home = ()=>{
    home_button.classList.add('active');
    menu_button.classList.remove('active');
    contact_button.classList.remove('active');
    const content = document.querySelector('#content');
    content.style.backgroundColor = 'transparent'
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
    menu_button.classList.add('active');
    home_button.classList.remove('active');
    contact_button.classList.remove('active');
    const content = document.querySelector('#content');
    content.innerHTML = `
    <h1 class="menu">Menu</h1>
        <div class="container">
            <div class="card">
                <div class="name">Chocolate Cake</div>
                <img src="./images/chocolate_cake.webp" alt="chocolate_cake_img">
                <div class="cost">100 Rs</div>
            </div>
            <div class="card">
                <div class="name">Cheese Cake</div>
                <img src="./images/cheese_cake.jpg" alt="chocolate_cake_img" >
                <div class="cost">100 Rs</div>
            </div>
            <div class="card">
                <div class="name">Strawberry Cake</div>
                <img src="./images/strawberry_cake.jpg" alt="chocolate_cake_img" >
                <div class="cost">100 Rs</div>
            </div>
            <div class="card">
                <div class="name">Muffins</div>
                <img src="./images/muffins.jpg" alt="chocolate_cake_img">
                <div class="cost">100 Rs</div>
            </div>
        </div>
    `
    content.style.backgroundColor = '#ffffff7f';
    
}

const contact = ()=>{
    
    contact_button.classList.add('active');
    home_button.classList.remove('active');
    menu_button.classList.remove('active');
    const content = document.querySelector('#content');
    content.innerHTML = ""
    
}

home();



home_button.addEventListener('click', home);
menu_button.addEventListener('click', menu);
contact_button.addEventListener('click', contact);

