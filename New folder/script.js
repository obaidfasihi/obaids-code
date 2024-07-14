// let a = fetch("https://goweather.herokuapp.com/weather/NY")
// a.then((code)=>{
//     console.log(code.status)
//     console.log(code.ok)
//     return code.json()
// }).then((code2)=>{
//     console.log(code2)
// })
document.addEventListener('DOMContentLoaded', function () {
    const names = [];

    const nameInput = document.getElementById('nameInput');
    const addNameButton = document.getElementById('addNameButton');
    const nameList = document.getElementById('nameList');

    const updateNameList = () => {
        nameList.innerHTML = names.map(name => `<div class="name">${name}</div>`).join('');
    };

    addNameButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            names.push(name);
            updateNameList();
            nameInput.value = '';
        }
    });
});
