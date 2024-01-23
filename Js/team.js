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
for (let member of team) {
  const name = member.name;
  const role = member.role;
  const image = member.image;
  console.log("Nome: " + name, "Ruolo: " + role, "Immagine: " + image);

  member = `<li class="col-4">
  <div class="card">
    <img src="./img/${image}" alt='${name}' />
    <p>${name}</p>
    <p>${role}</p>
    </div>
  </li>`;
  teamContainer.innerHTML += member;

  console.log(member);
}
