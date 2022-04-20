const companies =[
    {name:'company1',catogory:'finance', start:1991, end:2000},
    {name:'company2',catogory:'Tech', start:1982, end:2000},
    {name:'company3',catogory:'Finance', start:1993, end:2002},
    {name:'company4',catogory:'Retail', start:1994, end:2003},
    {name:'company5',catogory:'Medical', start:1995, end:2004},
    {name:'company6',catogory:'Finance', start:1986, end:1985},
    {name:'company7',catogory:'Retail', start:1998, end:2010},
    {name:'company8',catogory:'Tech', start:1981, end:1989},
    {name:'company9',catogory:'Retail', start:1998, end:2020},
    ]
    
    ages= [18,17,18,19,21,32,33,34,23,24,24];


console.log("++++++filter++++++++++");
// print ages greater than 21 first lets use for loop
 var canDrink = []
 for (let i=0;i<ages.length;i++){

    
     if (ages[i]>=21){

         canDrink.push(ages[i]);

     }
 }
console.log (canDrink+" using for loop");
console.log(canDrink.length); // how many poeple over 21 can drink



/// lets use filter for the above method 
let canDrink1 =ages.filter((age)=>{

    if(age>=21){

        return true;

    }
})
console.log(canDrink1+" using filter");
console.log(canDrink1.length);



// we can still optimize the above code using ES function


const candDrink2 =ages.filter(ages=>ages>=20);

console.log(candDrink2+" No of poeple who can drink :"+candDrink2.length);




// filter the retail companies first lets use es5


var retailCompanies = companies.filter((company)=>{
    if(company.catogory==='Retail'){
        return true;
    }
})
console.log("there are "+retailCompanies.length+"retail companies and they are "); 
console.log(retailCompanies);


// filter the retail companies using es6 same as above but more optimized


var retailCompanies1 = companies.filter(com=>com.catogory==='Retail');
console.log(JSON.stringify(retailCompanies1)+" using es6 notation"); // for some reason retailCompanies1 not getting printed in the console
                                                                     // so had to stringfy it inorder to check its getting correct values

 //filter all the companies in the 80s


var companiesin80s = companies.filter(company=>(company.start>=1980 && company.end<1990));
console.log(companiesin80s+" 80s companies"); // we have to stringify json type file to print in the console {x},{y},{z}== [{x},{y},{z}]
console.log(companiesin80s.length);

// companies lasted ten years or more 

var lastedTenYears = companies.filter(company=>(company.end-company.start)>=10);
console.log("companies that lasted ten years or more "+lastedTenYears);
