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
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo.id 는 문자열임 li.id도 문자열로 변환
	saveToDos();
}

function paintToDo(newTodo) {
	//newTodo가 text -> object를 받게함
	const list = document.createElement("li");
	list.id = newTodo.id;

	const span = document.createElement("span");
	span.innerText = newTodo.text; //<li><span></span> </li>
	// newTodo의 text만 출력

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
	const newTodoObj = {
		//문제점2 : 삭제 버튼 클릭 시, 화면 상에서는 지워지지만 새로고침 시 기존 데이터는 여전함
		text: newTodo, // 문제점 2 해결 : 새로운 객체를 생성해서 각각 고유의 아이디 부여하여 삭제할 데이터를 구별
		id: Date.now(), // random한 숫자를 id에 부과
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj); //newTodoObj(객체)로 바꾸면서 paintToDo함수 수정
	saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello(item) {
//	console.log("hello ", item);
//}

const savedToDos = localStorage.getItem(TODO_KEY);
//[{"text":"sleep","id":1667757771912},{"text":"read a book","id":1667757789720}]

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos; // 문제점1 해결 : 빈 리스트에 parsed로 변환된 값을 넣어줌
	parsedToDos.forEach(paintToDo);
	//or parsedToDos.forEach((item) => {
	//	console.log("hello ", item);
	//});
}
