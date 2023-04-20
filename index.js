//Variables
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//Event Listener of Add button
addTask.addEventListener("click", function () {
  let task = document.createElement("div"); //create div
  task.classList.add("task"); // add class for css

  let li = document.createElement("li"); // li
  li.innerText = `${inputTask.value}`; // task in li
  task.appendChild(li); // add li to div

  let checkButton = document.createElement("button"); // create check button
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton); // add to div

  let deleteButton = document.createElement("button"); // create delete button
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton); // add to div

  // check have value in input box or not
  if (inputTask.value === "") {
    alert("Please Enter a Task ");
  } else {
    // if have
    taskContainer.appendChild(task);
  }
  inputTask.value = " "; // set to blank for next task

  checkButton.addEventListener("click", function () {
    // click check
    checkButton.parentElement.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", function (e) {
    // click delete
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
