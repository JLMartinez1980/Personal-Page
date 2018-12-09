let nameInfo = () => {
  let welcome = "Welcome to the page"
  let firstName= document.getElementById('firstName').value;
  let lastName= document.getElementById('lastName').value;
  let fullName= firstName + ' ' + lastName;
  document.getElementById('fullName').innerHTML = fullName + '  ' +  welcome;

}

  var button = document.getElementById('btn');
  button.addEventListener('click',nameInfo);
