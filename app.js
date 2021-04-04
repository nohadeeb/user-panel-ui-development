const usersleft=[
  {
"name": "Mr san jones",
"email": "sanjones@example",
"number": "+222 55 5345",

},
{
"name": "Mr ani rabie",
"email": "sanjones@example",
"number": "+222 55 3299",

},
{
"name": "Mr robert well",
"email": "sanjones@example",
"number": "+222 55 3234",

}, 
{
"name": "Mr jan amin",
"email": "sanjones@example",
"number": "+242 8 400",

}
]
const usersRight=[
      {
    "name": "Mr noga deeb",
    "email": "sanjones@example",
    "number": "+222 55 4375",

  },
  {
    "name": "Mr amir ali",
    "email": "sanjones@example",
    "number": "+222 55 3563",

  },
    {
    "name": "Mr maamoun mokhtar",
    "email": "sanjones@example",
    "number": "+222 55 9723",

  }, 
   {
    "name": "Mr shaker adel",
    "email": "sanjones@example",
    "number": "+222 55 2389",

  }
]
function addUsersLeft(){


  let DomLeftParent=document.querySelector('.left');
  let DomLeft= document.querySelectorAll('.userwrapper');
  let DomLeftArray=[...DomLeft];

  for(i=0; i< DomLeftArray.length; i++){
    let username= document.createElement('h3');
    DomLeftArray[i].appendChild(username);
    let email= document.createElement('p');
    DomLeftArray[i].appendChild(email);
    let number= document.createElement('h5');
    DomLeftArray[i].appendChild(number);
    username.innerHTML=usersleft[i].name;
    email.innerHTML=usersleft[i].email;
    number.innerHTML=usersleft[i].number;
  }  


}
function addUsersRight(){


  let DomRightParent=document.querySelector('.right');
  let DomRight= document.querySelectorAll('.userwrapperRight');
  let DomRightArray=[...DomRight];

  for(i=0; i<DomRightArray.length; i++){
    let username= document.createElement('h3');
    DomRightArray[i].appendChild(username);
    let email= document.createElement('p');
    DomRightArray[i].appendChild(email);
    let number= document.createElement('h5');
    DomRightArray[i].appendChild(number);
    username.innerHTML=usersRight[i].name;
    email.innerHTML=usersRight[i].email;
    number.innerHTML=usersRight[i].number;

  }  
 


}
addUsersLeft();
addUsersRight();
