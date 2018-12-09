let nameInfo = () => {
  let welcome = "Welcome to the page"
  let firstName= document.getElementById('firstName').value;
  let lastName= document.getElementById('lastName').value;
  let fullName= firstName + ' ' + lastName;
  document.getElementById('fullName').innerHTML = fullName + '  ' +  welcome;

}
  var button = document.getElementById('btn');
  button.addEventListener('click',nameInfo);

let personalInfo = () => {
  let para = document.createElement("P");
  let text = document.createTextNode("I am an entry level developer with a passion for learning Primarily I've focussed on learnign the fundamentals of javaScript, but all areas in front-end frameworks have my attention.");
  para.appendChild(text);
  document.getElementById('myDIV').appendChild(para);
}

let buttonBio = document.getElementById('btnbio');
buttonBio.addEventListener('click', personalInfo);


let languageJs = () => {
      var x = document.createElement("A");
      var t = document.createTextNode("javaScript");
      x.setAttribute("href", "https://github.com/JLMartinez1980/finalproject-2");
      x.appendChild(t);
      document.body.appendChild(x);
  }

  let buttonJs = document.getElementById('btnjs');
  buttonJs.addEventListener('click', languageJs);

  let languageRe = () => {
        var a = document.createElement("A");
        var b = document.createTextNode("React");
        a.setAttribute("href", "https://github.com/JLMartinez1980/react-assignment-boilerplate");
        a.appendChild(b);
        document.body.appendChild(a);
    }

    let buttonRe = document.getElementById('btnre');
    buttonRe.addEventListener('click', languageRe);

    let languageAn = () => {
          var c = document.createElement("A");
          var d = document.createTextNode("Angular");
          c.setAttribute("href", "https://github.com/JLMartinez1980/angular-final");
          c.appendChild(d);
          document.body.appendChild(c);
      }

      let buttonAn = document.getElementById('btnan');
      buttonAn.addEventListener('click', languageAn);
