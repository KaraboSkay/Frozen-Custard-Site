const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
const logo = document.querySelector('.logo-image')
let logoImages = ["/assets/CLB.png", "/assets/CLW.png"]; 

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active') 
        logo.src = logoImages[1];
    } else {
        nav.classList.remove('active')
        logo.src = logoImages[0];
    }
}

const navList = document.getElementById("nav-list");
const navItems = navList.getElementsByTagName("li");

for (let i = 0; i < navItems.length; i++) {
  const navLink = navItems[i].querySelector("a");
  navLink.addEventListener("click", function (e) {
    for (let j = 0; j < navItems.length; j++) {
      navItems[j].querySelector("a").classList.remove("current");
    }
    navLink.classList.add("current");
  });
}


const products = [
    {
      image: '../../assets/m1.png',
      name: 'Golden Caramel Crunch',
      description: 'A delightful blend of rich custard with swirls of homemade caramel and crunchy praline pieces.',
    },
    {
      image: '../../assets/m2.png',
      name: 'Tropical Passionfruit Bliss',
      description: ' Dive into summer any time of the year with our exotic passionfruit custard dotted with fresh mango chunks.',
    },
    {
      image: '../../assets/m3.png',
      name: 'Velvety Chocolate Truffle',
      description: ' For the ultimate chocolate lover, dive into deep, dark chocolate custard with soft truffle bites.',
    },
  ];

const slider = document.querySelector('.slider-slider');
let index = 0;

function changeBackgroundImage() {
    const product = products[index];
    slider.style.backgroundImage = `url(${product.image})`;
    slider.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>`;
    index = (index + 1) % products.length;
  }
  
  setInterval(changeBackgroundImage, 5000);

  
  const reviewsContainer = document.querySelector('.reviews-container')
  const review = document.querySelector('.review')
  const userImage = document.querySelector('.user-image')
  const username = document.querySelector('.username')
  
  const reviews = [
    {
      name: 'Jordan T.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      text: "The creamiest custard I've ever had! Every flavor is a new adventure.",
    },
    {
      name: 'Mia K.',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: "Absolutely obsessed. I can't imagine summer without it!"
    }
  ]
  
  let idx = 1
  
  function updateReviews() {
    const { name, photo, text } = reviews[idx]
  
    review.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
  
    idx++
  
    if (idx > reviews.length - 1) {
      idx = 0
    }
  }
  
  setInterval(updateReviews, 10000)
  

  const labels = document.querySelectorAll('.form-control label')

  labels.forEach(label => {
      label.innerHTML = label.innerText
          .split('')
          .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
          .join('')
  })