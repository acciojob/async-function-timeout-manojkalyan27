//your JS code here. If required.

const btn = document.getElementById("btn");
const output = document.getElementById("output");

async function Printmessage(){

    const delay = parseInt(document.getElementById("delay").value,10);
const text = document.getElementById("text").value;

    if(!delay){
        output.innerText = "Please enter delay"
        return;
    }
        

    if(isNaN(delay) || delay<0){
        output.innerText= "Please enter Positive delay value";
        return;
    }

    await new Promise((resolve) => setTimeout(resolve , delay))
    
    output.innerText = text;

}

btn.addEventListener("click" , Printmessage);


