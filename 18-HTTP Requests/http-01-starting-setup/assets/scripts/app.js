const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader("Content-Type", "application/json");

  // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  // xhr.responseType = "json";
  // xhr.onload = function () {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     resolve(xhr.response);
  //   } else {
  //     reject(new Error("Something went wrong!"));
  //   }
  // resolve(CharacterData.response);
  // console.log(xhr.response);
  // const listOfPost = JSON.stringify(xhr.response);
  // const listOfPosts = xhr.response;
  // console.log(listOfPost);
  // for (const post of listOfPosts) {
  //   const postEl = document.importNode(postTemplate.content, true);
  //   postEl.querySelector("h2").textContent = post.title.toUpperCase();
  //   postEl.querySelector("p").textContent = post.body;
  //   listElement.append(postEl);
  // }
  //  xhr.onerror = function () {
  // console.log(xhr.response);
  // console.log(xhr.status);
  // reject(new Error("Failed to send request!"));
  //};
  // xhr.send(JSON.stringify(data));
  // });

  //});

  // return promise;
  return fetch(url, {
    method: method,
    //body: JSON.stringify(data),
    body: data,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong - server-side.");
        });
      }
      // return response.json();
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}

async function fetchPosts() {
  // try {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts",
  );

  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listElement.append(postEl);
  }
  // } catch (error) {
  //  alert(error.message);
  // }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData(form);
  // fd.append("title", title);
  // fd.append("body", content);
  fd.append("userId", userId);

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

// fetchPost();
fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});
// createPost("DUMMY", "A dummy post!");

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
  }
});
