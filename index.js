function errorCheck() {
    var error_msg = document.getElementById("error-msg");
    error_msg.innerHTML = "Please provide a valid email";
    error_msg.classList.add("error-text");
    
    document.getElementById("error-icon").src="images/icon-error.svg";
    document.getElementById("input-form").classList.add("error-form");
    return false;
};
