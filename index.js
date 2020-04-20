function errorCheck() {
  var email_value = document.getElementById("email").value;
  if(email_value === ""){
    var error_msg = document.getElementById("error-msg");
    error_msg.innerHTML = "Please provide a valid email";
    error_msg.classList.add("error-text");

    document.getElementById("error-icon").style.display = "block";
    document.getElementById("input-form").classList.add("error-form");
    return false;
  }

  return true;
};
