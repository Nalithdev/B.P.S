var titres = document.querySelectorAll(".questionFAQ");


titres.forEach((item) => {
  item.querySelector(".TitleAndIcon").addEventListener("click", () => {

    item.querySelector(".questionResponse").classList.toggle("hidden");
    item.classList.toggle("hidden");

    item.querySelector(".fa-solid").classList.toggle("fa-plus");
    item.querySelector(".fa-solid").classList.toggle("fa-minus");
    
    
    
  });
})


