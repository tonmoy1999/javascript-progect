const textdummy=[ 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution','It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'];
// console.log(textdummy);
// seleting elemint
const form=document.querySelector('#form');
const amount=document.querySelector('#amount');
const result=document.querySelector('#result');
// event listner
form.addEventListener('submit', function(e){
    
    e.preventDefault();
    // console.log("hello");
    let value = parseInt(amount.value) ;
    // console.log(typeof value);
    let rendomNumder = Math.floor(Math.random() * textdummy.length);
    // console.log(rendomNumder);
    if(isNaN(value) || value<=0 || value>5){
        result.innerHTML = `<p>${textdummy[rendomNumder]}</P>`;
    }
    
})