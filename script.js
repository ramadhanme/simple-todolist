const form = document.querySelector('.form');
const input = form.querySelector('.form_input');
const toDoList = document.querySelector('.toDoList');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let toDoId = String(Date.now());
	let toDoItem = input.value;

	addToDo(toDoId, toDoItem);
});

function addToDo(toDoId, toDoItem) {
	let li = document.createElement('li');
	li.setAttribute('data-id', toDoId);

	let span = document.createElement('span');
	span.appendChild(document.createTextNode(toDoItem));

	span.addEventListener('click', function () {
		toggleCompleted(li);
	});

	let deleteButton = document.createElement('a');
	deleteButton.href = '#';
	deleteButton.appendChild(document.createTextNode('X'));
	deleteButton.onclick = function () {
		toDoList.removeChild(li);
	};

	li.appendChild(span);
	li.appendChild(deleteButton);

	let completedToDos = toDoList.querySelectorAll('.completed');
	if (completedToDos.length > 0) {
		toDoList.insertBefore(li, completedToDos[0]);
	} else {
		toDoList.appendChild(li);
	}

	input.value = '';
}

function toggleCompleted(toDos) {
	toDos.classList.toggle('completed');

	if (toDos.classList.contains('completed')) {
		toDos.parentElement.appendChild(toDos);
	} else {
		let completedToDos = toDoList.querySelectorAll('.completed');
		toDos.parentElement.insertBefore(completedToDos[0]);
	}
}
