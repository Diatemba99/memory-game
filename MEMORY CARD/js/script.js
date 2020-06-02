
const cards = document.querySelectorAll('.memory-card');

function flipcard() 
{
 this.classList.toggle('flip')
}

cards.forEach(cards => cards.addEventListener('click', flipcard));
