$(document).ready(function() {

    // Getting references to the name inout and author container, as well as the table body
    var nameInput = $("#author-name");
    var emailInput = $("#author-email");
    var passInput = $("#author-password");
    var passfield = $("#userpassfield");
    var authorList = $("tbody");
    var authorContainer = $(".author-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#sign-in-form", handleAuthorFormSubmit);
    $(document).on("click", "#home-btn", returnHome);
    // $(document).on("submit", "#sign-in-form", handleAuthorFormSubmit);

    function returnHome(){
      window.location.href="/";
    }
  
    // A function to handle what happens when the form is submitted to create a new Author
    function handleAuthorFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim() || !emailInput.val().trim().trim() || !passInput.val().trim().trim() ) {
          alert("Please Enter in a name, email, and password")
        return;
      }else{
        getAuthors();
      }
        // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      for(var i=0; i < data.length; i++){
        if(nameInput.val().trim().trim() === data[i].name && emailInput.val().trim().trim()===data[i].username && passInput.val().trim().trim()===data[i].password){
          var thrgfhbstdgfb = data[i].id;
          var rgfrfgrgf = data[i].password;
          var erthngrgf = data[i].name;
          
          function getAuthors(author) {
            thrgfhbstdgfb = thrgfhbstdgfb || "";
            if (thrgfhbstdgfb) {
              thrgfhbstdgfb = "/?author_id=" + thrgfhbstdgfb;
            }
            $.get("/api/posts" + thrgfhbstdgfb, function(data) {
              // for(var i=0; i < data.length; i++){
                  console.log(data);
                  // submitPost();
                  console.log(data[0].AuthorId);
              // }
            });
          }
      
          getAuthors(thrgfhbstdgfb);

          adminCheck(thrgfhbstdgfb,rgfrfgrgf,erthngrgf);
          return thrgfhbstdgfb;
          // submitPost();
      }else{
          console.log("Nope");
      }
      }
    });
  }
   // Submits a new post and brings user to blog page upon completion
   function adminCheck(thrgfhbstdgfb,rgfrfgrgf,erthngrgf) {
    if(rgfrfgrgf.startsWith("admin")){
      alert("Welcome " + erthngrgf + "!" );
      window.location.href="/blog";
    }else{
      alert("Welcome " + erthngrgf + "!" );
      window.location.href="/userblog" + thrgfhbstdgfb;
    }
  }
  }
});


// var module = 5;

// exports = function(){

//   var test = {title: "hello"};
// }
  