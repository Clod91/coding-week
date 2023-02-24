import { qS, cE, CardGen } from "./utils.js";
import { GET } from "./api.js";
const types = [
  {
    id: 1,
    name: "Taglio capelli",
  },
  {
    id: 2,
    name: "Manicure",
  },
  {
    id: 3,
    name: "Altro",
  },
];
const taglio = qS("#taglio_capelli");
const manicure = qS("#manicure");
const other = qS("#altro");
const btn = qS(".btn");

GET().then((data) => {
  const appointments = data.map((item) => {
    const container = {};

    container.userId = item.userId;
    container.id = item.id;
    container.title = item.title;
    container.completed = item.completed;
    container.priority = Math.floor(Math.random() * 4) + 1;
    container.typeId = Math.floor(Math.random() * 3) + 1;

    return container;
  });
  const filteredApp1 = appointments.filter(
    (appointment) => appointment.typeId === 1
  );
  const filteredApp2 = appointments.filter(
    (appointment) => appointment.typeId === 1
  );
  const filteredApp3 = appointments.filter(
    (appointment) => appointment.typeId === 1
  );
  filteredApp1.forEach((app) => {
    taglio.appendChild(CardGen(app));
  });
  filteredApp2.forEach((app) => {
    manicure.appendChild(CardGen(app));
  });
  filteredApp3.forEach((app) => {
    other.appendChild(CardGen(app));
  });
});

function scrollTop() {
  document.documentElement.scrollTop = 0;
}

btn.addEventListener("click", () => {
  scrollTop();
});
