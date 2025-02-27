// let arr = [1,2,3,4,5,6,7,8,9]

// arr.forEach((index,el)=>{

//     console.log(el,index) 
// })


// let ans =arr.forEach((el, i)=>{
//     return el
// });

// console.log(ans)

// let ans =arr.map((el, i)=>{
//     return el*10
// });
// console.log(ans);


// let output = arr.filter((el,i)=>{
//     // return el%2==0 && el !=6
//     // return typeof el =="string" || el %5==0
//     return el%5==0;
// }).map((el, index)=>{ 
//     return el*2;
// }).reduce((acc, el)=>{
//     return acc+el;

// })

// console.log(output)


// let output =arr.filter((el,li)=>{
//     return el%2==0 && el%6!=0
// });
// console.log(output);

// let output = arr.reduce(( acc,el)=>{  
//     return acc+el
// },1);

// //first accumeleter then elment come
// console.log(output)




// let arr= [3,7,5,1,2,9,8,6,11,17,14,19,24,22,21]

// let ans = arr.sort((a,b)=>{return a-b});

// console.log(ans)

let data =[
    {name:"watch",price:20000, desc:"good watch",rating:4},
    {name:"shoe",price:12000, desc:"good show",rating:5},
    {name:"car",price:720000, desc:"good car",rating:5},
    {name:"phone",price:30000, desc:"good phone",rating:5},
    {name:"laptop",price:62000, desc:"good laptop",rating:5},
]

// data.sort((a,b)=>{return a.price-b.price})

// console.log(data)


data.sort((a,b)=>{
      let nameA= a.name.toUpperCase();
      let nameB= b.name.toUpperCase();
     

      if(a.name<b.name){
        return -1;
      }
      if(nameA>nameB){
        return 1;
      }
})

console.log(data)
