let str = "SV University";

console.log(str.length);

//console.log(str.length-1);

//console.log(str[2]);

console.log(str[str.length-1]);

//str[0] = "A";
console.log(str)

let arr = [1,2,3, "Noel",1.12, true, false,null,undefined,""];

console.log(arr);

console.log(arr[arr.length-2]);

console.log(arr[3]);

arr.push("Noella");
console.log(arr);

arr[4] = "Noelli";
console.log(arr);

//arr.pop();
//console.log(arr);

//slice
//splice


let obj = {
    Tom:{Species: "Cat", Rating:8, Enemies: ["Rats","D0gs"]},
    Jerry:{Species: "Rat", Rating:10, Enemies: ["Cats"]},
    1 : undefined

} 
console.log(obj);
console.log(obj.Tom.Enemies[1]);

console.log(obj["Jerry"]);

obj.Tom = "cat"
console.log(obj);

delete obj.Tom;

console.log(obj);

obj.Dog = {Hates:"Cats"}

console.log(obj);


//obbject literal
//using new keyword
//constructor

let name = "Something";
//let class = "B Tech"; // will give error bcz class is a reserved word 

let Class = "b Tech";
let hobbies = ["dance" , "reading"];

let NewObj ={
    name , Class, hobbies
}
console.log(NewObj);

let ans = [1,2,3,[9,4,6,[5,8,1]]]
console.log(ans[3][3][0]);
