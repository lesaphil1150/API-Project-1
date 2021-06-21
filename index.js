function fetchData() {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((text) => {
      let container = document.getElementById("info");
      let title = document.createElement("p");
      title.innerText = text.activity;
      container.appendChild(title);
      console.log(text);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
