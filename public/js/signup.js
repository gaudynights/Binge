// Wrapping all in document.ready to wait for page to load
$(document).ready(function() {

  // Adding an event listener for when the form is submitted
  $(".form-wrap").on("submit", handleSignup);

}); //end document.ready


 
// A function for handling what happens when the user signs up
function handleSignup(event) {
  event.preventDefault();
  // clear out the error messages
  $("#validation-message").html("");

  // Identify & store user's data 
  // ==================================================
  email = $("#email").val().trim();
  pw = $("#key").val().trim();
  verify_pw = $("#verify-key").val().trim();
  
  console.log(email);
  console.log(pw);
  console.log(verify_pw);


  // Wont submit the post if we are missing any
  if (!email || !pw || !verify_pw) {
    console.log("Please complete all fields.");
    // call validateMessage to display the proper error message to the user
    $("#validation-message").append("Please complete all fields.");
    return;
  }

  // if pw's dont' match
  if (pw !== verify_pw) {
    console.log("Passwords must match.");
    // call validateMessage to display the proper error message to the user
    $("#validation-message").append("Your passwords don't match.");
    return;
  }

  // Constructing a newUser object to hand to the database w/ submitted info
  var newUser = {
    email: email,
    password: pw
  };


  console.log(newUser);
  // Run submitPair to create a whole new pairing
    submitUser(newUser);
};

  // Submits a new pairing and brings user to view upon completion
  function submitUser(post) {
    console.log("submitUser function running");
    console.log(post);
    $.post('/signup', post, function(data, status) {
      console.log(data);
      console.log(status);
      // res.redirect("/add");
      if (status === "success") {window.location.href = "/add"};
  });}


