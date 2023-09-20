let letters =document.querySelector(".letters")
let span = document.querySelector(".head  span")

let lettersWord = "abcdefghijklmnopqrstuvwxyz"

// Array from words
let arrayFromLetters = Array.from(lettersWord)

// loop on the words && put it on page
arrayFromLetters.forEach((ele)=>{
    let letter = document.createElement("div")
    letter.className ="letter"
    letter.setAttribute("data-letter",ele)
    letter.innerHTML =ele
    letters.appendChild(letter)
})
let lettersbtns = document.querySelectorAll(".letters .letter")
const wordsobj ={
    programing:["php","javascript","python","django","java","TypeScript","sql","html","css","ruby"],
    movies:["prestigo","inception","parasite","interstellar","Pathaan","encanto"],
    people:["hitchcoch","alexander","cleopatera","robert","clooney","baldwin","murphy","clinton"],
    countries:["syria","egypt","bahrain","qatar",'china',"france","germany","russian","turkey"]
}

let arrayOfObject = Object.keys(wordsobj)

// ramdom number
let rarndomKey = Math.floor(Math.random()*arrayOfObject.length)
let randomkeyname = arrayOfObject[rarndomKey]
let arrayfromRandomKeyName = wordsobj[randomkeyname]
let randomNameFromkey =  Math.floor(Math.random()*arrayfromRandomKeyName.length)
let randomName = arrayfromRandomKeyName[randomNameFromkey]


console.log(randomName)

let container = document.querySelector(".container")
let inputbuttons =document.querySelector(".inputbuttons")

//create inputs

    for(let i =0 ; i < randomName.length;i++){
        let inputSpan = document.createElement("span")
        inputSpan.className = "input"
        inputbuttons.append(inputSpan)
    }


// Add Name Of The Key To Span



    span.innerHTML = randomkeyname



let inputspans =Array.from(document.querySelectorAll(".inputbuttons span"))


// Array From keyName
let keys = Array.from(document.querySelectorAll(".letters .letter")) 
let arrayFromRndomName = Array.from(randomName)



let audios =document.querySelectorAll("audio")
// wrongTRY
let wrongTry = 0;
let truetry = 0
    document.addEventListener("click" , function(e){
  
        if(e.target.className === "letter"){
            let status = false 
            e.target.classList.add("click")
            
         arrayFromRndomName.forEach((ele,indexletter)=>{
            if(ele  ==  e.target.innerHTML){
                truetry++
    
                status = true
                inputspans.forEach((span,indexspan)=>{
                    if(indexspan == indexletter ){
                        span.innerHTML = ele
                    }
    
                })
                check()
    
            }
              
         })
    
        if(status === false){
            audios[1].play()
            wrongTry++
           document.querySelector(".draw").classList.add(`wrong-${wrongTry}`)
          if(wrongTry == 8){
            stopGame()
             
          }
        }else{
            audios[0].play()
    
        }
        }
    
    
    })


function check(){
    if(truetry == arrayFromRndomName.length){
        let poppsucces = document.createElement("div")
        poppsucces.className ="Popp-Succes"
        let text =document.createTextNode(`Congratulation You Win`)

        poppsucces.appendChild(text)
        document.body.appendChild(poppsucces)

        setTimeout(()=>{
            location.reload()
        },3000)
    }

}

// if the player lose
function  stopGame(){

    document.querySelector(".letters").classList.add("fail")
    let popp = document.createElement("div")
    popp.className ="popp"
    let text =document.createTextNode(`you lose \n the word is ${randomName.toUpperCase()}`)
    popp.appendChild(text)

    document.body.appendChild(popp)
    audios[2].play()
setTimeout(()=>{
    location.reload()
},3000)

}





