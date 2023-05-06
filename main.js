function saveUserInput(event) {
    event.preventDefault();
    const expenseAmount = document.getElementById("expenseamount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const userInput = {
        expenseAmount,
        description,
        category
    }
    document.getElementById("expenseamount").value = ""
    document.getElementById("description").value = ""
    document.getElementById("category").value = ""
    
    
    localStorage.setItem('userInput', JSON.stringify(userInput));
        
    showUserOnScreen(userInput);
    
}

function showUserOnScreen(userInput) {
    const parentitem = document.getElementById('listOfItems');
    const childItem = document.createElement('li');
    childItem.innerHTML = childItem.innerHTML + `${userInput.expenseAmount} - ${userInput.description} - ${userInput.category}`;
    parentitem.appendChild(childItem);

    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Edit'
    editButton.className = 'btn btn-success btn-sm float-right'

    editButton.onclick = () => {
        localStorage.removeItem('userInput');
        parentitem.removeChild(childItem);
    }

    childItem.appendChild(editButton);

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.className = 'btn btn-danger btn-sm float-right'
    deleteButton.onclick = () => {
        localStorage.removeItem('userInput');
        parentitem.removeChild(childItem);
    }

    childItem.appendChild(deleteButton);
}
// function updateData(){
// document.getElementById("Submit").style.display = "none";
// document.getElementById("Update").style.display = "block";
// }
