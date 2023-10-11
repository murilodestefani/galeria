const filterLi = document.querySelectorAll(".filter-li a");
const filterableCards = document.querySelectorAll(".galeria .card-animal");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
       card.classList.add("hidden");
       
       if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "showAll") { 
           card.classList.remove("hidden");
       }
    });
}

filterLi.forEach(a => a.addEventListener("click", filterCards));