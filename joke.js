//var apiKey="563492ad6f917000010000014b0881014f2b40a790c7d80d0aee28f3";


const box=document.querySelector("#box");

const button=document.querySelector(".joke");

button.addEventListener("keydown",randomjokes)

//setInterval(randomjokes,3000)
randomjokes()

async function randomjokes(){
    const data=await fetch('https://icanhazdadjoke.com',{
   // const data=await fetch('https://goquotes-api.herokuapp.com',{

    headers:{
        "Accept":"application/json"
    }
    
})
const response=await data.json()

console.log(response)

box.innerHTML=response.joke
}

