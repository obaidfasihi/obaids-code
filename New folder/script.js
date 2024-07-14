// let a = fetch("https://goweather.herokuapp.com/weather/NY")
// a.then((code)=>{
//     console.log(code.status)
//     console.log(code.ok)
//     return code.json()
// }).then((code2)=>{
//     console.log(code2)
// })
document.addEventListener('DOMContentLoaded', function () {
    // Initialize an empty array to store names
    const names = [];

    // Select DOM elements
    const nameInput = document.getElementById('nameInput');
    const addNameButton = document.getElementById('addNameButton');
    const nameList = document.getElementById('nameList');

    // Function to update the name list on the webpage
    const updateNameList = () => {
        nameList.innerHTML = names.map(name => `<div class="name">${name}</div>`).join('');
    };

    // Add event listener to the button
    addNameButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            names.push(name);
            updateNameList();
            nameInput.value = '';
        }
    });
});
