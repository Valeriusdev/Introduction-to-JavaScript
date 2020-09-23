/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge= 4;
if (votingAge>18){ 
 console.log(true)
} else{
 console.log(false)
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
 let age= 4;
 let height= 5;
 If (height>=2){
   console.log(age++)  
 } if else (height<2)
  console.log(age+2)





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method (also javascript operators)

Number('1999');



//Task d: Write a function to multiply a*b 

let multiply = function(a,b){
    return a*b;}
    console.log(multiply(5,7))





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let dogsage = function(age){
    return age*7;}
console.log(dogsage(20)) 





/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder (age,weight){
    if (age>=1&&weight<=5){
      console.log ('Your dog should eat'+ weight*0.05)
    }else if(age>=1&&weight>=6&&weight<=10) {
       console.log ('Your dog should eat'+ weight*0.04)     
    }else if(age>=1&&weight>=11&&weight<=15) {
      console.log ('Your dog should eat'+ weight*0.03)
    }else if(age>=1&&weight>15) {
      console.log ('Your dog should eat'+ weight*0.02)
    }else if(age>=0.17&&age<=0.33) {
      console.log ('Your dog should eat'+ weight*0.1)     
    }else if(age>0.33&&age<=0.58) {
     console.log ('Your dog should eat'+ weight*0.05)
    }else if(age>0.58&&age<1) {
     console.log ('Your dog should eat'+ weight*0.04) 
    }   
}
dogFeeder(1,15)



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let computer = Math.floor(Math.random()*3);
let player = prompt ("Please enter rock, paper, or scissors")

if (computer===0){
  computer='rock'
} else if (computer===1){
  computer='paper'
} else if (computer===2){
  computer='scissors'
}
console.log(computer, player)

if (computer===player){
  console.log ('It is a tie')
} else if (computer==='rock'&& player==='paper'){
  console.log('you won')
} else if (computer==='rock'&& player==='scissors'){
  console.log('you lose') 
} else if (computer==='paper'&& player==='scissors'){
  console.log('you won')
} else if (computer==='paper'&& player==='rock'){
  console.log('you lose')
} else if (computer==='scissors'&& player==='paper'){
  console.log('you lose')
} else if (computer==='scissors'&& player==='rock'){
  console.log('you won')
} else {
 console.log('error')
}

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function converter(km){
   return km/1.609
}
console.log(converter(15))



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function converter(feet){
  return feet*30.48
}
console.log(converter(25))
  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall,
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong (num){
  let bottles;
  for (bottles = num; bottles>=1; bottles=bottles-1){
    console.log(bottles+" bottles of soda on the wall, take one down pass it around")
    console.log(bottles-1+" of soda left on the wall")
  }
}
annoyingSong(99)




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

const mark = Math.floor(Math.random()*100)
if (mark>=90){
  console.log ('Your grade is A')
}else if(mark>=80) {
   console.log ('Your grade is B')     
}else if(mark>=70) {
  console.log ('Your grade is C')
}else if(mark>=60) {
  console.log ('Your grade is D')     
}else if(mark<60) {
 console.log ('Your grade is F')
}
         

  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





