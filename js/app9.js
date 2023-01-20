const cardItem = document.getElementsByClassName("item");
const iconOpen = document.getElementsByClassName("iconOpen");
const iconClose = document.getElementsByClassName("iconClose");


// console.log(cardItem);
for(let i = 0; i<cardItem.length; i++){
        cardItem[i].addEventListener("click", () =>{
        cardItem[i].classList.toggle('active');
    }) 
}