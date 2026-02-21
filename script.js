
var links = document.querySelectorAll('a[href^="#"]');


for (var i = 0; i < links.length; i++) {


  links[i].addEventListener('click', function (e) {
    e.preventDefault();


    var sectionId = this.getAttribute('href');

    
    var section = document.querySelector(sectionId);

    
    if (section) {
      section.scrollIntoView();
    }
  });
}


// ---------------- HERO TEXT ----------------

var typedText = document.getElementById("typed-text");

var text = "Graphic Designer, Photographer, Web Developer";
var index = 0;

function typeText() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100); 
  }
}

if (typedText) {
  typeText();
}
