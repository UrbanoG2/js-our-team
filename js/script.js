const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

console.log(team[0]);


//recupero il mio container dal dom

const container = document.querySelector(".team-container");

//richiamo la funzione creata sotto

createCard(team, container);


// una funzione per creare qualcosa nel dom, che va attaccato al container preso in precedenza

function createCard (array, container) {

  container.innerHTML = " ";

  for (let i = 0; i < array.length; i++) {

    const object = array[i];

    //scrivo a mano l'HTML (odio i backtick)

    const containedDiv = `
      <div class="team-card">
        
        <div class="card-image">
          <img src="img/${object.image}" alt="">
        </div>
        

        <div class="card-text">
          <h3>${object.name}</h3>
          <p>${object.role}</p>
        </div>

      </div>
      
      `;

    //stampo in pagina ogni volta conservando ciò che ho stampato prima

    container.innerHTML += containedDiv;
  }
}