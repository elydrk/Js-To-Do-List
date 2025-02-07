const addTaskButton = document.getElementById("addTask");
const taskInput = document.getElementById("task");
let taskCounter = 0;

function addTask() {
  const task = taskInput.value;
  const targetInputContainer = document.getElementById('input-container');
  const taskNumber = taskCounter++;
  const HTMLcontent = `
  <div id="task-container-${taskNumber}"
  <label class="label" for="task-${taskNumber}">${task.trim().charAt(0).toUpperCase() + task.trim().slice(1).toLowerCase()}</label>
  <input type="checkbox" id="task-${taskNumber}" class="checkbox">
  </div>
  ` ;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLcontent);
  
  taskInput.value = "";

}

addTaskButton.onclick = addTask ;
taskInput.addEventListener("keydown", function(event){
  if (event.key === "Enter") {
    addTask();
    event.preventDefault();
  }
})