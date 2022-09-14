/* Dark/Light Mode - Begin */
//toggle dark mode with button id "toggleDarkMode"
let toggleDarkMode = document.getElementById("toggleDarkMode");

//enables dark mode by default.
let bodyDefault = document.getElementsByTagName("body")[0]; //gets the body tag
let darkModeButtonDefault = document.getElementById("toggleDarkMode");
bodyDefault.classList.add("dark"); //adds the class "dark" to the body tag
//if dark mode add class moon to body
if (bodyDefault.classList.contains("dark")) {
  bodyDefault.classList.add("moon");
  darkModeButtonDefault.classList.add("dark");
}

//toggle dark mode with button id "toggleDarkMode"
toggleDarkMode.addEventListener("click", function () {
  let pageBody = document.getElementsByTagName("body")[0]; //gets the body element
  let darkModeButton = document.getElementById("toggleDarkMode");
  // console.log(darkModeButton);

  // toggle multiple classes on body
  let toggleMultipleClasses = function (element, button) {
    // if body is dark, remove dark and moon classes and add light and sun classes
    if (pageBody.classList.contains("dark")) {
      pageBody.classList.remove("dark");
      pageBody.classList.remove("moon");
      button.classList.remove("dark");

      pageBody.classList.add("light");
      pageBody.classList.add("sun");
      button.classList.add("light");
    }
    // if pageBody is light, remove light and sun classes and add dark and moon classes
    else if (pageBody.classList.contains("light")) {
      pageBody.classList.remove("light");
      pageBody.classList.remove("sun");
      button.classList.remove("light");

      pageBody.classList.add("dark");
      pageBody.classList.add("moon");
      button.classList.add("dark");
    }
  };
  toggleMultipleClasses(pageBody, darkModeButton);
});
/* Dark/Light Mode - End */

// Rest of Code Goes below here -------------------------------------------------
console.log("If you see this, your page works!");
/*
TODO: Need to do step 1 here!
TODO: So many things to do here!

! This is a test and all things broke!
? What piece of code do I want to add here?
* IMportant working things here!
Hmm just a generic comment?!

*/

let baseProject = document.getElementById("baseProject");

const URL = "http://localhost:3000/posts";
console.log(URL);

//jquery get request

let myPosts = $.get(URL, function (data, status) {
  console.log(data);
  console.log(status);
});

//append to the baseProject div
myPosts.done(function (data) {
  console.log("Data done:", data);
  for (let i = 0; i < data.length; i++) {
    let post = data[i];
    console.log("post:", post);
    let postID = post.id;
    let postTitle = post.title;
    let postUser = post.name;
    let postComment = post.comment;
    console.log("postComment:", postComment[0].id);

    baseProject.innerHTML = `
      <div class="card" style="width: 18rem;">
        <p class="cardComponent">ID: ${postID}</p>
        <h1 class="cardComponent">Title: ${postTitle}</h1>
        <p class="cardComponent">Name: ${postUser}</p>
        // map through the comments array
        ${postComment.map((comment) => {
          return `
          <p class="cardComponent">Comment: ${comment.body}</p>
          `;
        })}
      </div>
    `;
  }
});
