$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
    var nameInput = $("#author-name");
    var emailInput = $("#author-email");
    var passInput = $("#author-password");
    var passfield = $("#userpassfield");
    var authorList = $("tbody");
    var authorContainer = $(".author-container");

    // Getting the intiial list of Authors
    getAuthors();
  
    // Function for creating a new list row for authors
    function createAuthorRow(authorData) {
      var newTr = $("<tr>");
      newTr.data("author", authorData);
      newTr.append("<td>" + authorData.name + "</td>");
      newTr.append("<td> " + authorData.Posts.length + "</td>");
      newTr.append("<td><a href='/blog3?author_id=" + authorData.id + "'>Go to Exercise Charts</a></td>");
      newTr.append("<td><a href='/blog2?author_id=" + authorData.id + "'>Go to Measurement Charts</a></td>");
      newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create an Exercise Chart</a></td>");
      newTr.append("<td><a href='/cms2?author_id=" + authorData.id + "'>Create a Measurement Chart</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Client</a></td>");
      return newTr;
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getAuthors() {
      $.get("/api/authors", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createAuthorRow(data[i]));
        }
        renderAuthorList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderAuthorList(rows) {
      authorList.children().not(":last").remove();
      authorContainer.children(".alert").remove();
      if (rows.length) {
        authorList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no authors
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an Author before you can create a Post.");
      authorContainer.append(alertDiv);
    }
  });
  