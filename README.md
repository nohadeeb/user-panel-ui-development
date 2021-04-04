# user-panel-ui-development

the first stage is to develop the UI manualy , that means that even the panel horizontal line and the table is implemented from scratch this is not an image
secondly we will have data coming from somewhere
I supposed that this users data will be sent as 2 arrays of object
left panel and right panel array
each object holds the user information
so each object should be diaplyed beside the panel icon
so this whole process should happen dynamicly 
which means that data shoud not be added through the HTML as we will recieve the data from the backend developer as object
for this reason I had to loop inside each DOM panel blocks elements to create new elements which will hold my objects data
than assign the object key value to those elements
and I had to use the old looping method the for loop in order to have access to the INDEX number 
because I want to give the order for the first panel block to display the first object or the same index of the element
for that reason I used this function : 


  let DomLeft= document.querySelectorAll('.userwrapper'); // these are the left side panel blocks
  let DomLeftArray=[...DomLeft]; // converted to array

  for(i=0; i< DomLeftArray.length; i++){
    let username= document.createElement('h3');// fcreate h3 element
    DomLeftArray[i].appendChild(username);// append this h3 which is the variable username to the block
    let email= document.createElement('p');
    DomLeftArray[i].appendChild(email);
    let number= document.createElement('h5');
    DomLeftArray[i].appendChild(number);
    username.innerHTML=usersleft[i].name; // target the array of objects which called : usersleft and access the object number [i] the key named : name and assign the name value to my username variable.
    email.innerHTML=usersleft[i].email;
    number.innerHTML=usersleft[i].number;
  }  


}
