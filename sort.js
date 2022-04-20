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

//sort 
   // lets sort the companies to the earliest year to latest year by start date 
   const SortedCompanies= companies.sort(function(c1,c2){
    if(c1.start>c2.start){return 1;}
    else {return -1;}
});
console.log("sorted companies "+ JSON.stringify(SortedCompanies));


// optimized way
const SortedCompanies1 = companies.sort((a,b)=>(a.start>b.start ? 1:-1));
console.log("sortedcompanies1"+JSON.stringify(SortedCompanies1));


// sort ages
const sortAge = ages.sort((a,b)=>a-b);
console.log("sortAge :"+ (sortAge));