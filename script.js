
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

// show submoit msg
let contactBtn = document.getElementById("contact-btn");
let form = document.querySelector("form");
const backendUri = "http://localhost:3000/api/form";

// let formName = document.getElementById("name");
// let formEmail = document.getElementById("email");
// let formMessage = document.getElementById("message");
console.log(contactBtn);

contactBtn.addEventListener("click", async(e)=> {
  e.preventDefault();
  contactBtn.disabled = true;
  contactBtn.textContent = "Loading...."

  console.log("success");

  const formData = {
    name: form.name.value,
    email: form.email.value, 
    message: form.message.value,
  }
  

  if(!formData.name  || !formData.email || !formData.message === ""){
    alert("All fields are required");
    return;
  }

  try{
    const response = await fetch(backendUri, {
      method: "POST", 
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(formData)
      
    });

    const data = await response.json();
    form.reset();
    console.log(data);
    // contactBtn.setAttribute("loading", isLoading);
    alert("Form submitted");
    contactBtn.disabled = false
    contactBtn.textContent = "Message me!"

    
  }catch(error){
    console.log(error.message)
  }

  
  
})
