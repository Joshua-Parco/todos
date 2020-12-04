state = {
  todos: [],
};

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const render = () => {
  let htmlString = "<div>";
  htmlString += "<h1>To Do's</h1>";
  htmlString += "<div class='btn' onclick='renderTodos()'>Display To Do's</div>";
  htmlString += "</div>";
  document.getElementById("app").innerHTML = htmlString;
};

render();
