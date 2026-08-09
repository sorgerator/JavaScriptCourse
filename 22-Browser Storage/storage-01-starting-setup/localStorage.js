const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrive-btn");

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["Sposrts", "Cooking"],
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
  const extractedId = localStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  if (extractedId) {
    console.log("Got the if - " + extractedId);
  } else {
    console.log("Could not find id.");
  }
});
