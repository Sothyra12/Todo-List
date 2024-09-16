const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        setStoredData();
    } else {
        alert('Please enter a task.');
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        setStoredData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        setStoredData();
    }
}, false);

function setStoredData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getShowStoredData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
getShowStoredData();