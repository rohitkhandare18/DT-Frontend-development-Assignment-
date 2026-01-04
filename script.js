
const data = [
  { title: "HTML", description: "Structure of the web" },
  { title: "CSS", description: "Styling and layout" },
  { title: "JavaScript", description: "Dynamic behavior" }
];

const container = document.getElementById("cards");
const emptyMsg = document.getElementById("emptyMsg");
const filterBtn = document.getElementById("filterBtn");

let filtered = false;

function renderCards(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    emptyMsg.classList.remove("hidden");
    return;
  }

  emptyMsg.classList.add("hidden");

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${item.title}</h3><p class="desc hidden">${item.description}</p>`;

    card.addEventListener("click", () => {
      card.querySelector(".desc").classList.toggle("hidden");
    });

    container.appendChild(card);
  });
}

filterBtn.addEventListener("click", () => {
  filtered = !filtered;
  filterBtn.innerText = filtered ? "Show All" : "Show Only JavaScript";

  const list = filtered
    ? data.filter(item => item.title === "JavaScript")
    : data;

  renderCards(list);
});

renderCards(data);
