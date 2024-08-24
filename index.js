const containerDiv = document.getElementById('container');
const sizePromptBtn = document.getElementById('size-prompt');
const clearGridBtn = document.getElementById('clear-grid');
//initial grid size
createGrid(16);

// prompt user for grid size
sizePromptBtn.addEventListener('click', function () {
    let size = parseInt(prompt("Enter the size of the grid you want"));
    // size = parseInt(size);
    console.log(size);
    containerDiv.innerHTML = "";
    if (size > 100 || isNaN(size) || size <= 0) {
        alert("Please enter a valid number")
    }
    createGrid(size)
})

function createGrid(size) {
    document.documentElement.style.setProperty('--size', size);
    for (let i = 1; i <= size; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row-div';
        containerDiv.append(rowDiv);
        // rowDiv.textContent = i;
        for (let j = 1; j <= size; j++) {
            const boxDiv = document.createElement('div');
            boxDiv.className = 'box-div';

            rowDiv.append(boxDiv);

            // event listner
            boxDiv.addEventListener('mouseover', function () {
                boxDiv.style.backgroundColor = 'green';
            })
        }

    }
}

clearGridBtn.addEventListener('click', function () {
    const boxDivs = document.querySelectorAll('.box-div');
    boxDivs.forEach(boxDiv => {

        boxDiv.style.backgroundColor = 'black';
    });
});

