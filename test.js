
    var originSelect = document.getElementById("origin");
    var userOrigin = originSelect.options[sel.selectedIndex].text;
    
    var userAge =  parseInt(document.getElementById('age').value);
    const submit = document.getElementById("submit");

submit.addEventListener("click", validateUser);

    function validateUser(){
    
    If(userOrigin === "New Zealand" && userAge >= 18){
    button.innerHTML = "Submit";
    alert('Thank you, you may continue shopping');
    
    }
    else{
    button.innerHTML = "Submit";
    alert('Sorry you are not able to shop with us');
    
    }
    }