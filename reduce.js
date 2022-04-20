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

 // using reduce
 const ageSum1 = ages.reduce((total,age)=>total+age,0);
 console.log("sum of All ages1= " + ageSum1);

 // to find the total year for each companies: rage of the years of each companies and adding up

 const totalYears = companies.reduce((total,company)=>total+(company.end-company.start),0);
 console.log("totalYears = " +totalYears);