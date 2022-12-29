let get= a => a //created a function which is returning a

console.log(get(1))


let sq= (b) => {return b*b}

console.log(sq(4))


var b =3

let cube= () => {return b*b*b}

console.log(cube())


// deeper 

let x= function(){


    var that=this
    this.val=1
    setTimeout(function(){
        that.val++ ;
        console.log(that.val)
    },1000)
}
x()


//or same thing can be done using fat arrow


let y= function(){



    this.val=1
    setTimeout(() => {
        this.val++ ;
        console.log(this.val)
    },2000)
}
y()

// to grt the arguments we put inside the function

let m= function (){
    console.log(arguments[0])// can get arguments using argument keyword
}

m("name","age")

// we can achieve similar thing using spread operator

let z=  (...n) => {// here in es6 we can use spread operator to put n number of arguments inside our function ...n
    console.log(n[0])// can get arguments using n[] keyword
}

z("name","age")