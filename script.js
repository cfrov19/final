let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}



window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});




document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};



var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },  
  
});

const cars = [
  { id: 1, model: 'Sedan', name: 'Toyota Camry', image: 'https://via.placeholder.com/250/0000FF/808080', price: '$30,000' },
  { id: 2, model: 'SUV', name: 'BMW X5', image: 'https://via.placeholder.com/250/FF0000/FFFFFF', price: '$60,000' },
  { id: 3, model: 'Sports', name: 'Ferrari F8', image: 'https://via.placeholder.com/250/00FF00/000000', price: '$200,000' },
  { id: 4, model: 'Sedan', name: 'Honda Accord', image: 'https://via.placeholder.com/250/FFFF00/000000', price: '$28,000' },
  { id: 5, model: 'SUV', name: 'Toyota Highlander', image: 'https://via.placeholder.com/250/FFA500/FFFFFF', price: '$40,000' },
  { id: 6, model: 'Sports', name: 'Porsche 911', image: 'https://via.placeholder.com/250/8A2BE2/FFFFFF', price: '$120,000' },
];

function loadCars(filter) {
  const carsGrid = document.getElementById('carsGrid');
  carsGrid.innerHTML = '';
  const filteredCars = filter === 'all' ? cars : cars.filter(car => car.model.toLowerCase() === filter);
  filteredCars.forEach(car => {
      const carCard = document.createElement('div');
      carCard.className = 'car-card';
      carCard.innerHTML = `
          <img src="${car.image}" alt="${car.name}" width="100%" />
          <h3>${car.name}</h3>
          <p>Model: ${car.model}</p>
          <p>Price: ${car.price}</p>
      `;
      carsGrid.appendChild(carCard);
  });
}

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      loadCars(filter);
  });
});


loadCars('all');


