function deletme(){
    document.getElementById("textarea").value = " ";
}

function setValue(newvalue){
document.getElementById("textarea").value += newvalue;




}


function jog(){
    let x=document.getElementById("textarea").value ;
    let y=eval(x);
    document.getElementById("textarea").value =y;
}