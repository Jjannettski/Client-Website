$(document).ready(function() {
    /* global moment */
    // var signInTest = require("./signin.js");
    // console.log(signInTest);

    // blogContainer holds all of our posts
    var blogContainer3 = $(".blog-container3");
    var postCategorySelect = $("#category");

    // Variable to hold our posts
    var posts;
  
    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;

    var authorId;

    console.log(authorId);

    // If you delete this function and call get posts with the author id, it gets the post from each "author"
    if (url.indexOf("?author_id=") !== -1) {
      authorId = url.split("=")[1];
      console.log(authorId);
      createAuthorRow(authorId);
      getPosts(authorId);
    }
    // If there's no authorId we just get all posts as usual
    else {
      console.log(authorId);
      createAuthorRow(authorId);
      getPosts();
    }

    console.log(window.location.href);
    console.log(authorId);
  
    function createAuthorRow(authorId) {
      console.log(authorId);
      var buttonContainer = $("#full-btn-container");
      buttonContainer.prepend("<a class='btn btn-success signin' href='/userblog?author_id=" + authorId + "'>Go to Dashboard</a>");
      buttonContainer.prepend("<a class='btn btn-success signin' href='/userblog1?author_id=" + authorId + "'>Go to Exercise Charts</a>");
      buttonContainer.prepend("<a class='btn btn-success signin' href='/userblog2?author_id=" + authorId + "'>Go to Measurement Charts</a>");
      buttonContainer.prepend("<a class='btn btn-success signin' href='/'>Sign Out</a>");
      
      return buttonContainer;
    }

    // This function grabs posts from the database and updates the view
    function getPosts(author) {
      authorId = author || "";
      if (authorId) {
        authorId = "/?author_id=" + authorId;
      }
      $.get("/api/posts" + authorId, function(data) {
        console.log("Posts", data);
        posts = data;
        if (!posts || !posts.length) {
          displayEmpty(author);
        }
        else {
          initializeRows();
        }
      });
    }

    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
      blogContainer3.empty();
      var postsToAdd = [];
      for (var i = 0; i < posts.length; i++) {
        postsToAdd.push(createNewRow(posts[i]));
      }
      blogContainer3.append(postsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(post) {
      var formattedDate = new Date(post.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var newPostPanel = $("<div>");
      newPostPanel.addClass("panel panel-default");
      var newPostPanelHeading = $("<div>");
      newPostPanelHeading.addClass("panel-heading");
      // var deleteBtn = $("<button>");
      // deleteBtn.text("x");
      // deleteBtn.addClass("delete btn btn-danger");
      // var editBtn = $("<button>");
      // editBtn.text("EDIT");
      // editBtn.addClass("edit btn btn-info");
      var newPostTitle = $("<h2>");
      var newPostDate = $("<small>");
      var newPostAuthor = $("<h5>");
      newPostAuthor.text("Written by: " + post.Author.name);
      newPostAuthor.css({
        float: "right",
        color: "blue",
        "margin-top":
        "-10px"
      });
      var newPostPanelBody = $("<div>");
      newPostPanelBody.addClass("panel-body");
      var newPostBody = $("<p>");
      var newPostExercise = $("<p>");
      var newPostWeight = $("<p>");
      var newPostSetsReps = $("<p>");
      var newPostSeatNumber = $("<p>");
      newPostTitle.text(post.title + " ");
      newPostExercise.text("Exercise: " + post.exercise);
      newPostWeight.text("Weight: " + post.weight);
      newPostSetsReps.text("Sets/Reps: " + post.setsReps);
      newPostSeatNumber.text("Seat Number: " + post.seatNumber);
      newPostDate.text(formattedDate);
      newPostTitle.append(newPostDate);
      // newPostPanelHeading.append(deleteBtn);
      // newPostPanelHeading.append(editBtn);
      newPostPanelHeading.append(newPostTitle);
      newPostPanelHeading.append(newPostAuthor);
      newPostPanelBody.append(newPostExercise);
      newPostPanelBody.append(newPostWeight);
      newPostPanelBody.append(newPostSetsReps);
      newPostPanelBody.append(newPostSeatNumber);
      newPostPanel.append(newPostPanelHeading);
      newPostPanel.append(newPostPanelBody);
      newPostPanel.data("post", post);
  
      return newPostPanel;
    }
  
    // This function displays a messgae when there are no posts
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Author #" + id;
      }
      blogContainer3.empty();
      var messageh2 = $("<h2>");
      messageh2.css({ "text-align": "center", "margin-top": "50px" });
      messageh2.html("No posts yet" + partial + ", Speak with your trainer in order to get started.");
      blogContainer3.append(messageh2);
    }

  });
  