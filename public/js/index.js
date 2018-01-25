$(document).ready(function(){

    var signInButton = $("#signup-button");
    var post;

    $(signInButton).on("click", function signIn() {
        $.post("/signin", function() {
          window.location.href = "/signin";
        });
      });
});