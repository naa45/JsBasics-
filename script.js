/******************
 * CODING CHALLENGE ONE
 * CALCULATING BMI
 */

let Marks_mass = 50;
let Marks_height = 3;

let Johns_mass = 65;
let Johns_heights = 4;  

// calculating bmi
marks_bmi = Marks_mass / (Marks_height*Marks_height)
Johns_bmi = Johns_mass / (Johns_heights*Johns_heights)

// bool to check ages
result = marks_bmi > Johns_bmi

console.log("Is Marks BMI higher than John's "+ result)

/**
 * Ternary Operator
 */
var age = 24
var drink = age >= 18 ? 'beer' : 'Juice';
console.log(drink)

/********************
 * CODING CHALLENGE 2
 * AVERAGE SCORES
 */

var Johns_team_Average_score =( 89 + 120 + 103) / 3;
Marks_team_Average_score = (116 + 94 + 123) / 3;
Mary = (97 + 134 + 105) / 3

if (Johns_team_Average_score > Marks_team_Average_score && Johns_team_Average_score > Mary){
     console.log( "TEAM JOHN WINS, Average score: "+ Johns_team_Average_score);
}

else if (Marks_team_Average_score > Johns_team_Average_score && Marks_team_Average_score > Mary) {
    console.log( "TEAM MARK WINS, Average score: "+ Marks_team_Average_score)
} 

else if (Mary > Marks_team_Average_score && Mary >  Johns_team_Average_score) {
    console.log("TEAM MARY WINS! Average score: "+ Mary)
    
} 
else {
    console.log( "Draw!");

}