function saveUserInput(event){
    event.preventDefault();
    const expenseAmount = document.getElementById("expenseamount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const userInput = {
        expenseAmount,
        description,
        category
    }
    localStorage.setItem('userInput', JSON.stringify(userInput));
    showUseOnScreen(userInput);
}

function showUseOnScreen(userInput) {
    const parentitem = document.getElementById('listOfItems');
    const childItem = document.createElement('li');
    childItem.textContent = userInput.expenseAmount + ' - ' + userInput.description + ' - ' + userInput.category;
    parentitem.appendChild(childItem);
    

    const editButton = document.createElement('input')
    editButton.type = 'button'
    editButton.value = 'Edit'
    editButton.className = 'btn btn-success btn-sm float-right'
    editButton.onclick = () => {
        localStorage.removeItem(userInput.description);
        parentitem.removeChild(childItem);
    }

    childItem.appendChild(editButton);

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.className = 'btn btn-danger btn-sm float-right'
    deleteButton.onclick = () => {
        localStorage.removeItem(userInput.description);
        parentitem.removeChild(childItem);
    }

    childItem.appendChild(deleteButton);
}
