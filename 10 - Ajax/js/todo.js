var tasks = document.getElementById('tasks').children,
    area1 = document.getElementById('area1').children,
    area2 = document.getElementById('area2').children,
    area3 = document.getElementById('area3').children,
    area4 = document.getElementById('area4').children,
    i = tasks.length + 1;

function addTask(event) {
  event.preventDefault();
  var inputVal = document.getElementById('input').value;
  if (inputVal !== '') {
    document.getElementById('input').value = '';
    var tasks = document.getElementById('tasks');
    var task = document.createElement('div');
      task.classList.add('task');
    var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute('id', "id"+i);
    var label = document.createElement('label');
      label.setAttribute('for', "id"+i);
      label.innerText = inputVal;
    task.appendChild(checkbox);
    task.appendChild(label);
    tasks.appendChild(task);
    i++;
  }
}

function hideTask() {
  var tasks = document.getElementById('tasks');
  var hidden = document.querySelectorAll('input:checked');
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].parentNode.style.display = 'none';
    hidden[i].checked = false;
  }
}

function showS(mas){
  for (let i = 0; i < mas.length; i++) {
    if ( mas[i].style.display === 'none') {
      mas[i].style.display = 'block';
    }
  }
}
function showTask() {
  showS(tasks);
  showS(area1);
  showS(area2);
  showS(area3);
  showS(area4);

}

function delS(mas){
  var deleted = document.querySelectorAll('input:checked');
  for (let i = 0; i < deleted.length; i++) {
    try{
    mas.removeChild(deleted[i].parentNode);
    }catch(e){
    }
  }
}

function delTask() {
  var tasks = document.getElementById('tasks'),
      area1 = document.getElementById('area1'),
      area2 = document.getElementById('area2'),
      area3 = document.getElementById('area3'),
      area4 = document.getElementById('area4');
  delS(tasks);
  delS(area1);
  delS(area2);
  delS(area3);
  delS(area4);
}
