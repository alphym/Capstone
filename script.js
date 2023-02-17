const menuBtn = document.querySelector('#menu-id');
const mobileBar = document.querySelector('.mobile-bar');
const closeBtn = document.querySelector('#close-btn');
const featureContainer = document.querySelector('.feature-card-container');

// mobile menu in mobile screen start
menuBtn.addEventListener('click', () => {
  mobileBar.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  mobileBar.classList.remove('active');
});
// mobile menu in mobile screen  end

const featureSpeakers = {
  0: {
    name: 'Jeanette Kagame',
    title: 'First lady of Rwanda',
    description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    img: './images/first.jpg',
  },
  1: {
    name: 'Loiuse M ',
    title: 'Secretary General of Organisation internationale de la Francophonie',
    description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    img: './images/mushikiwabo.jpg',
  },
  2: {
    name: 'Ntwali Lois',
    title: 'CEO of She can code ',
    description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    img: './images/woman.jpg',
  },
  3: {
    name: 'Ingabire Paula',
    title: 'Minister of ICT',
    description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    img: './images/chef_02.png',
  },
  4: {
    name: 'Arlene Umwiza',
    title: 'Managing Director of AI in tourism ',
    description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    img: './images/arlene.jpg',
  },
  5: {
    name: 'Uwase Raissa ',
    title: 'ceo of Techgirls',
    description: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    img: './images/raissa.jpg',
  },

};

// featureContainer
let html = '';
const featureKeys = Object.keys(featureSpeakers);

for (let i = 0; i < featureKeys.length; i += 1) {
  html += `<div class="single-feature-card">
                <div class="card-feature-img">
                    <img src="${featureSpeakers[i].img}" alt="">
                </div>
                <div class="card-feature-description">
                    <h2 class="header-two">${featureSpeakers[i].name}</h3>
                        <h3 class="header-three">${featureSpeakers[i].title}</h3>
                        <hr>
                        <p class="par-card"> ${featureSpeakers[i].description}</p>
                </div>
            </div>`;
}
featureContainer.innerHTML = html;
