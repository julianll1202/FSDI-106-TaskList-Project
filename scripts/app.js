var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var isHidden = false;
var notHiddenIcon = "fa-eye";
var hiddenIcon = "fa-eye-slash";

function saveTask() {
  console.log("Task saved");

  let title = $("#txtTitle").val();
  let dueDate = $("#txtDueDate").val();
  let description = $("#txtDescription").val();
  let tag = $("#txtTag").val();
  let color = $("#txtColor").val();
  let category = $("#txtCategory").val();

  console.log(title, dueDate, description, tag, color, category);

  let task = new Task(title, dueDate, description, tag, color, category);
  console.log(task);
  displayTask(task);
  clearInputs();
}

function displayTask(task) {
    console.log("Title: ", task.title);console.log("Due date: ", task.dueDate);
    console.log("Description: ", task.description);
    console.log("Tag: ", task.tag);
    console.log("Color: ", task.color);
    console.log("Category: ", task.category);

    let syntax = `
        <div class="task">
            <div class="task-info">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            <div class="task-date">
                <h3>${task.dueDate}</h3>
            </div>
            <div class="task-extra">
                <h3>${task.category}</h3>
                <h3>${task.tag}</h3>
            </div>
        </div>
        `;
    $(".taskList").append(syntax);
}

function clearInputs(){
    console.log("Clearing...");
    $(".form-control").val("");
    $(".form-select").val("");
}
function changeIcon() {
  if (!isImportant) {
    //change the icon to important
    $("#important").removeClass(nonImportantIcon).addClass(importantIcon);
    console.log("Star click");
    isImportant = true;
  } else {
    // change the icon to no important
    $("#important").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant = false;
  }
}

function hideInfo() {
  if (!isHidden) {
    console.log("Section hid");
    $("#eyeIcon").removeClass(notHiddenIcon).addClass(hiddenIcon);
    $("section.info").hide();
    isHidden = true;
  } else {
    $("#eyeIcon").removeClass(hiddenIcon).addClass(notHiddenIcon);
    $("section.info").show();
    isHidden = false;
  }
}

function init() {
  console.log("Task Manager");

  //load prev data

  // catch events
  $("#btnSave").click(saveTask);
  $("#important").click(changeIcon);
  $("#hideBtn").click(hideInfo);
}

window.onload = init;
