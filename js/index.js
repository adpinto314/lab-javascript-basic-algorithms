// Iteration 1: Names and Input

let hacker1 = "Andre";

let hacker2 = "David";

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)}
else if (hacker1.length > hacker2.length){
    console.log(`he driver has the longest name, it has ${hacker1.length} characters.`)}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
};


// Iteration 3: Loops


let newWord = "";
let newWord2 = "";

for (i = 0; i < hacker1.length; i++){
   
    newWord = newWord + hacker1[i] + " ";
}

for (i = hacker2.length-1; i >= 0; i--){

    newWord2 = newWord2 + hacker2[i];
}

console.log(newWord.toUpperCase());

console.log(newWord2);

if (hacker1 < hacker2){
    console.log("The driver's name goes first.")}
    else if (hacker1 > hacker2) {
        console.log("Yo, the navigator goes first definitely.")}
        else if (hacker1 === hacker2){
            console.log("What?! You both have the same name?")
}
