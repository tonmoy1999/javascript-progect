let computerGess;
let useguss;
 const init = () => {
    computerGess = Math.floor(Math.random) * 100;

    document.getElementById("newGamebutton").style.display="none";
    document.getElementById("newGameArea").style.display="none";
 };
const startGame = () => {
    document.getElementById("wlicomeSection").style.display="none";
    document.getElementById("newGameArea").style.display="block";
}

// =========
const comperguss= () =>{
    const inputBox=Number(document.getElementById("inputBox").value);
    useguss = [...useguss,inputBox];
    document.getElementById("gesses").innerHTML=useguss;

}

 const easyMode = () =>{
    maxguss=10;
startGame()
 }

 const hardMode = () =>{
    maxguss=5;
    startGame()
 }