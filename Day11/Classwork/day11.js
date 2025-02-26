//console.log(this);

let obj={
    name:"abc",
    Class:"btech",
    myFunction:function(){
        console.log(this);
        console.log(name, Class)
        console.log("I am a method inside object");
    },
    subjects:["dbms","cn","ai","ml","dl"],
    newObj:{
        1:80,
        nestedFunction:function(){
            //console.log(this);
            console.log("I am nested method of Object");
        },
        nestedNewObj:{
            myMethod:function(){
                console.log("another nested method");
            }
        }
    }
}
console.log(obj);
//obj.myFunction();
//obj.newObj.nestedFunction();


let num1=10,num2=20;
if(num1<num2){
    console.log("$(num1)is less than $(num2)");
}else if(num1==num2){
    console.log("$(num1)is equall to $(num2)");

}else{
    console.log("$(num2)is less than $(num1)");
}


let a=3;
if(a%3==0 && a%5==0){
   console.log("$(a) is fizzbuzz");
}else if(a%5==0){
    console.log("$(a) is buzz");
}else if(a%3==0){
    console.log("$(a) is fizz");
}else{
    console.log("$(a) is something else");
}


let Num=10;
for(let i=0; i<Num; i++){
    console.log(i);
}

let arr=[1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<arr.length; i++){
    console.log(arr[i],i)
}

let str = "abc def"
for(i=0; i<=str.length; i++){
    console.log("a"+str[i])
}

let ar=["a","b","c","d"]
for(let num of ar){
   console.log(num)
}

let num=5;
while(num<10){
    num++
}

let Arr=[1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<Arr.length; i++){
   if(Arr[i]%2==0){
       console.log(Arr[i]+"is"+"even");
   }else{
       console.log(Arr[i]+"is"+"odd");
   }
}
