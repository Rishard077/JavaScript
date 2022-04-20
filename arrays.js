/*var marks =Array(6)
var marks = new Array(20,40,50,25,15,35)


var marks = [20,40,50,25,15,35]

console.log(marks[2])
marks[2]=42
console.log(marks[2])
console.log(marks.length)
marks.push(26)
console.log(marks)
marks.pop()
console.log(marks)
let filterEvenNumbers = marks.filter(marks=>marks%2==0)
console.log(filterEvenNumbers)

var veggies =["Apple","Orange", "Banana","WaterMelon"]
console.log(veggies.sort())
veggies.reverse() // sort strings in reverse order
marks.sort((a,b)=>a-b)  // sort numbers in ascending orders
marks.sort((a,b)=>b-a) // sort numbers in revers order*/


//let socialprofile =['facebook','tiktok','instagram','gotabook',35,{}];
//console.log(socialprofile);

let person ={

    firstName :"mohamed",
    lastName  : "Rishard",
    gender: 'male',
    'E-Mail': 'raja@gmail.com',
    
    socialprofile :['facebook','tiktok','instagram','gotabook',35,{name:123}],
    
    
    fullName: function(){
        console.log('helo '+this.firstName+' '+this.lastName);
    }
    };
   

    person.socialprofile.pop()
    console.log(person.socialprofile);
    

