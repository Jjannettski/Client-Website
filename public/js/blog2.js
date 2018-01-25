$(document).ready(function() {
    /* global moment */
  
    // blogContainer holds all of our posts
    var blogContainer2 = $(".blog-container2");
    var postCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete2", handlePostDelete2);
    $(document).on("click", "button.edit2", handlePostEdit2);
    // Variable to hold our posts
    var posts2;
  
    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var authorId;
    if (url.indexOf("?author_id=") !== -1) {
      authorId = url.split("=")[1];
      getPosts2(authorId);
    }
    // If there's no authorId we just get all posts as usual
    else {
      getPosts2();
    }
  
  
    // This function grabs posts from the database and updates the view
    function getPosts2(author) {
      authorId = author || "";
      if (authorId) {
        authorId = "/?author_id=" + authorId;
      }
      $.get("/api/post2s" + authorId, function(data) {
        console.log("Posts2", data);
        posts2 = data;
        if (!posts2 || !posts2.length) {
          displayEmpty2(author);
        }
        else {
          initializeRows2();
        }
      });
    }
  
    // This function does an API call to delete posts
    function deletePost2(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/post2s/" + id
      })
      .done(function() {
        getPosts2(postCategorySelect.val());
      });
    }
  
    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows2() {
      blogContainer2.empty();
      var postsToAdd2 = [];
      for (var i = 0; i < posts2.length; i++) {
        postsToAdd2.push(createNewMeasurement(posts2[i]));
      }
      blogContainer2.append(postsToAdd2);
    }  
    // This function constructs a measurement chart's HTML
    function createNewMeasurement(post) {
      var formattedDate = new Date(post.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      var newPostPanel2 = $("<div>");
      newPostPanel2.addClass("panel panel-default");
      var newPostPanelHeading = $("<div>");
      newPostPanelHeading.addClass("panel-heading");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete2 btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit2 btn btn-info");
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
      var newPostPanelBody2 = $("<div>");
      newPostPanelBody2.addClass("panel-body");
      var newPostHips = $("<p>");
      var newPostThigh = $("<p>");
      var newPostCalf = $("<p>");
      var newPostWaist = $("<p>");
      var newPostNeck = $("<p>");
      var newPostArm = $("<p>");
      var newPostChest = $("<p>");
      var newPostShoulders = $("<p>");
      var newPostBodyWeight = $("<p>");
      newPostTitle.text(post.title +" Circumference/Measurements " + " ");
      newPostHips.text("Hips: " + post.hips);
      newPostThigh.text("Thigh: " + post.thigh);
      newPostCalf.text("Calf: " + post.calf);
      newPostWaist.text("Waist: " + post.waist);
      newPostNeck.text("Neck: " + post.neck);
      newPostArm.text("Arm: " + post.arm);
      newPostChest.text("Chest: " + post.chest);
      newPostShoulders.text("Shoulders: " + post.shoulders);
      newPostBodyWeight.text("Body Weight: " + post.bodyWeight);
      newPostDate.text(formattedDate);
      newPostTitle.append(newPostDate);
      newPostPanelHeading.append(deleteBtn);
      newPostPanelHeading.append(editBtn);
      newPostPanelHeading.append(newPostTitle);
      newPostPanelHeading.append(newPostAuthor);
      newPostPanelBody2.append(newPostHips);
      newPostPanelBody2.append(newPostThigh);
      newPostPanelBody2.append(newPostCalf);
      newPostPanelBody2.append(newPostWaist);
      newPostPanelBody2.append(newPostNeck);
      newPostPanelBody2.append(newPostArm);
      newPostPanelBody2.append(newPostChest);
      newPostPanelBody2.append(newPostShoulders);
      newPostPanelBody2.append(newPostBodyWeight);
      newPostPanel2.append(newPostPanelHeading);
      newPostPanel2.append(newPostPanelBody2);
      newPostPanel2.data("post2", post);
  
      return newPostPanel2;
    }
  
    // This function figures out which post we want to delete and then calls deletePost
    function handlePostDelete2() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post2");
      deletePost2(currentPost.id);
    }
  
    // This function figures out which post we want to edit and takes it to the appropriate url
    function handlePostEdit2() {
      var currentPost = $(this)
        .parent()
        .parent()
        .data("post2");
      window.location.href = "/cms2?post_id=" + currentPost.id;
    }
  
    // This function displays a messgae when there are no posts
    function displayEmpty2(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Author #" + id;
      }
      blogContainer2.empty();
      var messageh2 = $("<h2>");
      messageh2.css({ "text-align": "center", "margin-top": "50px" });
      messageh2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
      blogContainer2.append(messageh2);
    }
  
  });
  