

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
                <div class="cost">500 ₹</div>
            </div>
            <div class="card">
                <div class="name">Cheese Cake</div>
                <img src="./images/cheese_cake.jpg" alt="chocolate_cake_img" >
                <div class="cost">400 ₹</div>
            </div>
            <div class="card">
                <div class="name">Strawberry Cake</div>
                <img src="./images/strawberry_cake.jpg" alt="chocolate_cake_img" >
                <div class="cost">500 ₹</div>
            </div>
            <div class="card">
                <div class="name">Muffins</div>
                <img src="./images/muffins.jpg" alt="chocolate_cake_img">
                <div class="cost">100 ₹</div>
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
    content.innerHTML = `
 
    <div class="contact">
        <h1 class="contact_title">Contact</h1>
            <div class="field">
                <img src="images/icons8-phone-60.png" alt="phone_logo">
                <div class="info">123-456-789</div>
            </div>
            <div class="field">
                <img src="images/icons8-google-maps-old-60.png" alt="maps_logo">
                <div class="info">221B Baker St, Marylebone, London NW1 6XE, UK</div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4248513434086!2d-0.1585557!3d51.523767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20London%20NW1%206XE%2C%20UK!5e0!3m2!1sen!2sin!4v1678103002409!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>    
    `
    
}

home();



home_button.addEventListener('click', home);
menu_button.addEventListener('click', menu);
contact_button.addEventListener('click', contact);

