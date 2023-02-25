//  question no 1
var A = [0,1,2,3]
for(let a = 0 ; a<1; a++){
    console.log(A)
}
var B = [1,0,1,2]
for(let a = 0 ; a<1; a++){
    console.log(B)
}
var C = [2,1,0,1]
for(let a = 0 ; a<1; a++){
    console.log(C)
}




// question no 2
for(let i=1; i<=10; i++){
    console.log(i)
}

// question no 3
// var table = prompt("wirte the number");
// for(i = 1; i<=10; i++){
//     console.log(table+" X" + i + " =" + i*table);
// }

// question  no 5

var fruits = ["apple","banana","mangos","orange" ,"strawberry"]
for(let a = 0; a < fruits.length  ; a++){
    console.log(`element at index ${[a]} is ${fruits[a]}`)


}

// question no 7 
var orderOfItem = prompt("what do you wants")
var A = ["cake","apple pie","cookies","chips","patties"]
var flag = false;
for(let a = 0 ; a<A.length; a++){
    if(orderOfItem == A[a]){
          flag  = true
            boxNumber = a
    }
}
if(flag){
    console.log(`yes tis product ${orderOfItem} is aviable at the box number${boxNumber}`)

}else{
    console.log(`not aviable `)
}

var largestNumber = +prompt("Enter the largest number")
var Arrayitem = [24,53,78,91,12]
var m = 0
for(let a = 0 ; a<Arrayitem.length ; a++){
    if(Arrayitem[a] > m){

        m = Arrayitem[a]
        console.log(`the largest number is ${Arrayitem[a]}`)
    }
}

for(let i = 5; i<=100; i++){
    console.log(i)
}