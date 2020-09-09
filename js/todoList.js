console.log("test");
//Selecting the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const test = "test";
//Classes names
const CHECK = "checked_btn";
const UNCHECK = "unchecked_btn";
const LINE_THROUGH = "line-through";

//Show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//Add to do fucntion
function addToDo(toDo) {
  const item = `
                <li class="item">
                    <input type="checkbox" />
                    <p class="text">${toDo}</p>
                    <i class="delete_btn fa fa-trash-o de" job="delete"></i>
                </li>
                `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

addToDo("drink coffee boi");
