const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODO_KEY = "todo";

function saveToDos() {
	localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
} //문제점1 : 페이지를 새로고침하고 다시 작성시 초기화된 상태로 다시 작성한 목록만 저장됨

function deleteTodo(event) {
	const li = event.target.parentElement; // 부모 요소를 가져와 remove 실행
	li.remove();
}

function paintToDo(newTodo) {
	const list = document.createElement("li");
	const span = document.createElement("span");
	span.innerText = newTodo; //<li><span></span> </li>

	const button = document.createElement("button"); // 삭제 버튼 추가
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	list.appendChild(span);
	list.appendChild(button);
	toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value; //입력값을 따로 변수로 두어 입력란을 제출 뒤, 공백으로 두게끔 함
	toDoInput.value = "";
	toDos.push(newTodo);
	paintToDo(newTodo);
	saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item) {
//	console.log("hello ", item);
//}

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos; // 문제점1 해결 : 빈 리스트에 저장된 값을 넣어줌
	parsedToDos.forEach(paintToDo);
	//or parsedToDos.forEach((item) => {
	//	console.log("hello ", item);
	//});
}
