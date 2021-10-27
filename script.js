
document.getElementById('btnsubmit')
.addEventListener('click',async function(e){
  e.preventDefault();
  const fname=document.getElementById('fname').value;
 const lname=document.getElementById('lname').value;

 let user={firstName:fname,lastName:lname}
 await db.collection('users').add(user);
 location.reload();
 

});

const userList=document.getElementById('user-list');
//Get users
db.collection("users")
  .get()
  .then(function(snapshot) {
    snapshot.docs.forEach(function(userDocument){
      let userItem=document.createElement('li');
      userItem.innerHTML=userDocument.data().
      firstName+" "+userDocument.data().lastName;
      userList.appendChild(userItem);
    });
  });