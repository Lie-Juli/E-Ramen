const toggle = document.querySelector('.toggle input');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', function(){
    nav.classList.toggle("active");
});

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

function validation(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var message = document.getElementById("message");
    var checkbox = document.getElementById("checkbox");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    if(name.value.length == 0){
        alert("Please insert your name");
        return;
    }
    else if(email.value.length == 0){
        alert("Please insert your email");
        return;
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Sorry, we only accept gmail");
        return;
    }
    else if(phone.value.length == 0){
        alert("Please insert your phone number");
        return;
    }
    else if(phone.value.length <= 10 || phone.value.length >= 13){
        alert("Phone number must have 10-13 numbers");
        return;
    }
    else if(sBtn_text.innerText === "Select Preference"){
        alert("Please, Choose an option");
        return;
    }
    else if(message.value.length == 0){
        alert("Please insert a message");
        return;
    }
    else if(message.value.length <= 20){
        alert("Message must be more than 20 characters");
        return;
    }
    else if(!checkbox.checked){
        alert("Must agree to receive our newsletter");
        return;
    }
    else{
        alert("Thank You For Reaching Out To Us \n We wil review your message and get right back to you within 24 Hours")
    }
}