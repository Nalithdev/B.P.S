var titres = document.querySelectorAll(".questionFAQ");


titres.forEach((item) => {
  item.querySelector('.questionTitle').addEventListener('click', () => {
    item.querySelector('.questionResponse').classList.toggle('hidden')
    item.classList.toggle('hidden')
  })
})