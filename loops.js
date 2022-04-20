let person ={

    firstName :"mohamed",
    lastName  : "Rishard",
    gender: 'male',
    'E-Mail': 'raja@gmail.com',
    
socialprofile :['facebook','tiktok','instagram','gotabook','Youtube',35],
    fullName: function(){
        console.log('helo '+this.firstName+' '+this.lastName);
    }
    };
   /*  for (let i=0;i<=person.socialprofile.length;i++){
         console.log(person.socialprofile[i]);
     }*/    // for loop can be done in as follow

   /* person.socialprofile.forEach(logitem)
     function logitem(items,index,array){
         console.log(items); }*/ // following way also prints the same

      /*   person.socialprofile.forEach((item,index,array)=>{
             console.log(item);
             console.log(index);
             console.log(array);
         })*/  // lets c how many times something appears in the array 
         let hasYotube = false;
         person.socialprofile.forEach((item,index,array)=>{
            if (item==='Youtube'){
                hasYotube = true;
            }
        })
        console.log(hasYotube);



    