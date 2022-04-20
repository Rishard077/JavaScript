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

console.log(companies.start); // you cant print like this instead use the following
 //for each is like for loop
for (let i=0; i<companies.length;i++){
   console.log("for loop method "+companies[i].start);
}
console.log("++++++++for Each+++++++++++++++++");
// for each
var startdate =[]
 companies.forEach((items)=>{
     ///console.log("for each method "+items.start);   // for each return value is string
     console.log(items.name)
     
     
 }) 






 // filter
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


// filter the retail companies using es6
var retailCompanies1 = companies.filter(com=>com.catogory==='Retail');
console.log(retailCompanies1+" using es6 notation"); // if we do not json.stringify this will not print in the console

 //filter all the companies in the 80s
var companiesin80s = companies.filter(company=>(company.start>=1980 && company.end<1990));
console.log(companiesin80s+" 80s companies"); // we have to stringify json type file to print in the console {x},{y},{z}== [{x},{y},{z}]
console.log(companiesin80s.length);

// companies lasted ten years or more 
var lastedTenYears = companies.filter(company=>(company.end-company.start)>=10);
console.log("companies that lasted ten years or more "+lastedTenYears);


// map
var comNames= companies.map((company)=>{
    return company.name;



});
console.log("comNames: "+comNames);

var companynames = companies.map(name=>name.name);
console.log(companynames+" names of the company");

// map the compani names with start to end date 
var testMap = companies.map((company)=>{

    return `${company.name}[${company.start}-${company.end}]`
})
console.log(testMap);

//optimizedway
 var testMap1=companies.map(company=>`${company.name}[${company.start}-${company.end}]`)

 console.log(testMap1+" testMap1");

 // squre the ages and get another arry
  var ageSquare = ages.map(age=>Math.sqrt(age));
   console.log("age Square root array ="+ ageSquare+"  array size is =  "+ageSquare.length);

   //sort 
   // lets sort the companies to the earliest year to latest year by start date 
 const SortedCompanies= companies.sort(function(c1,c2){
     if(c1.start>c2.start){return 1;}
     else {return -1;}
 });
console.log("sorted companies "+ JSON.stringify(SortedCompanies));



const SortedCompanies1 = companies.sort((a,b)=>(a.start>b.start ? 1:-1));
 console.log("sortedcompanies1"+JSON.stringify(SortedCompanies1));


 // sort ages
 const sortAge = ages.sort((a,b)=>a-b);
 console.log("sortAge :"+ (sortAge));

 // reduce function
// sum of age usinf for loop
 let Agesum =0;
 for(let i =0; i<ages.length; i++){
     Agesum+=ages[i];
 }
 console.log("Sum of all ages= "+Agesum);


 // using reduce
 const ageSum1 = ages.reduce((total,age)=>total+age,0);
 console.log("sum of All ages1= " + ageSum1);

 // to find the total year for each companies: rage of the years of each companies and adding up

 const totalYears = companies.reduce((total,company)=>total+(company.end-company.start),0);
 console.log("totalYears = " +totalYears);