const filterLis = document.querySelectorAll(".filterCard li");
const filterableCards = document.querySelectorAll(".cardList .card");

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "ShowAll"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterLis.forEach((li) => li.addEventListener("click", filterCards));