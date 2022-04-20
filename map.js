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

    

// map
var comNames= companies.map((company)=>{
    return company.name;

});

console.log("comNames: "+comNames);

// optimize way

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

    