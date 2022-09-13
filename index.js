const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const listArray = [];

function displayList () {    
    if (input.value != "") {
        let task = document.querySelector('#task');
        let p = document.createElement('p');
        task.append(p);
        
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        task.append(doneButton); 
        task.append(deleteButton);
        doneButton.innerText = "Done";
        deleteButton.innerText = "Delete";
   
        p.innerText = input.value;
        input.value = "";

        doneButton.setAttribute('id', 'done-button');
        deleteButton.setAttribute('id', "delete-button");
        
        let doneItem = document.querySelectorAll('#done-button');
        let deleteItem = document.querySelectorAll('#delete-button');
        
        for (let elements of doneItem) {
            let target = elements.target;
            target.addEventListener('click', function () {
                p.style.textDecoration = "line-through";
            });
        }  

    } else {
        alert('Input field empty')
    }
}

btn.addEventListener('click', displayList);
