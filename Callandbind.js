/ call

var obj = {num:2};

var addThisTo = function(a,b,c)
{
    return this.num+a+b+c;  //here this .num will be pointing to our obj num which is 2. 
}

console.log(addThisTo.call(obj,3,4,5))//call here is gonna put the addtothis function to our obj and execute the output all it is doing here is taking obj+function(3,4,5)= output //14



// apply

let arr=[1,2,3]

console.log(addThisTo.apply(obj,arr))
//it apply the arr as an argument for our function.
// as a=1,b=2,c=3


//bind


let arr2=[1,2,3]

console.log(addThisTo.bind(obj,arr2))// it will give us an bounded function with the method of addto this function 
// which has the ability to execute the adtothis function methods.

var bound= addThisTo.bind(obj)
console.log(bound)

console.log(bound(1,2,3))




//
var Student={

    age:20
}

var printAge= function()
{
    return this.age;
}

var bound= printAge.bind(Student)

console.log(bound());

// demonstration of call apply and bind

// var obj= {num:2}

// var functionName=function(arg1,arg2,arg3){

// }

// functionName.call(obj,arg1,arg2,arg3)

// functionName.apply(obj,[arg1,arg2,arg3])

// var bound=functionName.bind(obj)
// bound(arg1,arg2,arg3)

