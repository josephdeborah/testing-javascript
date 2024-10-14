//convert naira to pound 2,117.65 Nigerian Naira
//convert naira to euro 1,771.43 Nigerian Naira
//convert degree to fareherient  °F = (9/5 × °C) + 32.
 


//conversion to pounds

alert("welcome to money calc")
let welcome = prompt("Enter your name")
let greetings gb= alert(  "Welcome " + welcome + " to money calc ")
let naira = prompt(" To convert your amount to pound . Enter your amount in naira")
let rate = 2117.651
function exchangeRate(){
    return naira/rate
}
alert( " Your amount in pound is : " + exchangeRate() +"Pound" )





//conversion to euro
alert("You are about convert your amount in naira to euro")
let euro = prompt("Enter your amount in naira")
let rate1 = 1771.43 
function exchangeRate1(){
    return euro/rate1
}
alert( " Your amount in euro is : " + exchangeRate1() + "Euro" )


//conversion to degree fareherient
alert("You are about convert degree celsius to degree fareherient")
let degree = prompt("Enter your degree in celsuis")
let celsius = degree
let fareherient = (9/5 * celsius) + 32 
function scienceCalculation(){
    return (9/5 * celsius) + 32
}
alert( " Your degree in fareherient is : " + scienceCalculation() + "°F" )
