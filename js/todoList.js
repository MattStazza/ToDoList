console.log("test");
//Selecting the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const test = "test";
//Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//Add to do fucntion
function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `
                <li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"</i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>
                `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

//Adding a ToDo by clicking [ENTER].
//Will add a new item.
//Wont add an item if the input is empty.
//The input is reset.
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    const toDo = input.value;

    //if the input isn't empty
    if (toDo) {
      addToDo(toDo);
    }
    input.value = "";
  }
});

addToDo("test", 1, false, false);
