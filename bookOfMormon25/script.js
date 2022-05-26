const item = document.querySelector('#item');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click', () => {
    if (item.value != '') {
        let li = document.createElement('li');
        let deleteElement = document.createElement('button');
        li.textContent = item.value;
        deleteElement.textContent = "❌";
        li.append(deleteElement);
        output.append(li);
        deleteElement.addEventListener('click', function() {
            output.removeChild(li);
            item.focus();
        })
        item.value = "";
        item.focus;
    }
});