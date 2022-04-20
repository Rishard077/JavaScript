let person ={

firstName :"mohamed",
lastName  : "Rishard",
gender: 'male',
'E-Mail': 'raja@gmail.com',

fullName: function(){
    console.log('helo '+this.firstName+' '+this.lastName);
}
};

//person.email ='raju@gmail.com';

//console.log(person.gender);
//console.log(person['E-Mail']);
//person.fullName();

// converting javascript object to json
console.log(JSON.stringify(person));

let jsonPerson =JSON.parse(JSON.stringify(person));// to interract with jason files use JSON.parse
console.log(jsonPerson);



