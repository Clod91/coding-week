const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const CardGen = (data) => {
  if (Object.keys(data).length === 0) {
    const emptyEl = cE("h2");
    emptyEl.className = "empty_title";
    emptyEl.textContent =
      "Non è stato prenotato nessuan appuntamento per qesta categoria";
  }
  const cardEl = cE("div");
  cardEl.className = "card";
  const titleEl = cE("p");
  const priorityEl = cE("p");
  titleEl.className = "title";
  const completedEl = cE("p");
  //   const typeEl = cE("p");
  titleEl.textContent = data.title;
  priorityEl.textContent = "priorità: " + data.priority;
  completedEl.textContent = "completato: " + data.completed;
  //   typeEl.textContent = data.typeId;
  if (data.completed === false) {
    cardEl.style.backgroundColor = "black";
    cardEl.style.color = "white";
  }

  cardEl.append(titleEl, priorityEl, completedEl);
  return cardEl;
};

export { cE, qS, CardGen };
