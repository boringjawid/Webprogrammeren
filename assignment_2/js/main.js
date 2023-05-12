function validateForm(){
  // get input values
  var name = $("#inputName").val();
  var age = $("#inputAge").val();
  var city = $("#inputCity").val();
  var email = $("#inputEmail").val();
  var phone = $("#inputPhone").val();

  // set regex patterns
  var nameRegex = /^[a-zA-Z\s]+$/;
  var ageRegex = /^[0-9]+$/;
  var cityRegex = /^[A-Za-z\,\.\s]+$/;
  var phoneRegex = /^[0-9+ ]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // check if inputs are valid
  if (name == "" || !nameRegex.test(name)) {
      $("#form-alert").html("Please enter a valid name");
      return false;
  }
  if (age == "" || !ageRegex.test(age)) {
      $("#form-alert").html("Please enter a valid age");
      return false;
  }
  if (city == "" || !cityRegex.test(city)) {
      $("#form-alert").html("Please enter a valid city name");
      return false;
  }
  if (email == "" || !emailRegex.test(email)) {
      $("#form-alert").html("Please enter a valid email address");
      return false;
  }
  if (phone == "" || !phoneRegex.test(phone)) {
      $("#form-alert").html("Please enter a valid phone number");
      return false;
  }

  // if all inputs are valid, return true
  return true;
}

function writeFormData(){
  var formData = {
    name: $('#inputName').val(),
    age: $('#inputAge').val(),
    city: $('#inputCity').val(),
    email: $('#inputEmail').val(),
    phone: $('#inputPhone').val()
  };

  $('#form-content table tbody tr').each(function(index) {
  $(this).find('td').eq(0).text(formData[Object.keys(formData)[index]]);
  });
  
  $('#form-content').css('display', 'block');
};


$(document).ready(function() {
  // submit button event handler
  $('.nav-link').click(function() {
    $(this).tab('show');
  });
  $("#submitBtn").click(function(){
      if (validateForm()) {
          writeFormData();
          $("#form-alert").hide();
      } else {
          $("#form-alert").show();
      }
  });

  // erase button event handler
  $("#eraseBtn").click(function(){
      $("#inputName").val("");
      $("#inputAge").val("");
      $("#inputCity").val("");
      $("#inputEmail").val("");
      $("#inputPhone").val("");
      $("#form-alert").hide();
  });
});