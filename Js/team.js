// # DOM ELEMENTS
const teamContainer = document.getElementById("team");

// # ARRAY
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// # CICLO PER ESTRARRE INFO DA ARRAY
let member = "";

for (let arrayItem of team) {
  const name = arrayItem.name;
  const role = arrayItem.role;
  const image = arrayItem.image;

  member = `<li class="col-4">
    <div class="card">
    <img src="./img/${image}" alt='${name}' />
    <h6>${name}</h6>
    <p>${role}</p>
    </div>
    </li>`;
  teamContainer.innerHTML += member;
}
