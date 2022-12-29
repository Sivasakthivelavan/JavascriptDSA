class student {


let get= a => a //created a function which is returning a

console.log(get(1))


let sq= (b) => {return b*b}

console.log(sq(4))


var b =3

let cube= () => {return b*b*b}

console.log(cube())


// deeper 

let x= function(){


   constructor(name , age , boardmarks)

   {

     this.name=name

     this.age=age


     this.boardmarks=boardmarks





   }



    var that=this
    this.val=1
    setTimeout(function(){
        that.val++ ;
        console.log(that.val)
    },1000)
}
x()


//or same thing can be done using fat arrow

   eligibilityPLacements(miniage)
   {
       return (minmarks) => {
        if (this.boardmarks>minmarks && this.age>miniage)
        {
            console.log(this.name+" " +"is ready for placements")
        }
        else{
            console.log(this.name+ " "+ "not ready for placements")
        }
       }
   }

 }


//  eligibilityPLacements(18)


 var s1= new student("suman",20,80)
 s1.eligibilityPLacements(18)(40)


let y= function(){

 var s2= new student("nandani",19,90)
 s2.eligibilityPLacements(18)(40)


    this.val=1
    setTimeout(() => {
        this.val++ ;
        console.log(this.val)
    },2000)
}
y()





 var s3= new student("gautami",18,65)
 s3.eligibilityPLacements(18)(40)

// to grt the arguments we put inside the function
 

let m= function (){
    console.log(arguments[0])// can get arguments using argument keyword
}



 var s4= new student("jai",20,39)
 s4.eligibilityPLacements(18)(40)

m("name","age")
 

// we can achieve similar thing using spread operator



 var s5= new student("balu",20,33)
 s5.eligibilityPLacements(18)(40)

let z=  (...n) => {// here in es6 we can use spread operator to put n number of arguments inside our function ...n
    console.log(n[0])// can get arguments using n[] keyword
}

z("name","age")
