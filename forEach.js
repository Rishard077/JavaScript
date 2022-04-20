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
    