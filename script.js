console.log("connected");

const button = document.getElementById("addlist");
const input = document.getElementById("userinput");
const ul = document.getElementById("list");
const inputLength = () => {
  if (input.value.length > 0) {
    return true;
  } else {
    alert("Please provide a text");
    return false;
  }
};

function createList() {
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  li.appendChild(checkBox);
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });
}

function onClick() {
  if (inputLength) {
    createList();
  }
}

function onEnter(e) {
  if (inputLength && e.key === "Enter") {
    createList();
  }
}

button.addEventListener("click", onClick);
input.addEventListener("keypress", onEnter);
