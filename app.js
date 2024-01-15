function scheduleSwitch() {
    let button = document.getElementById('scheduelChangeBtn');
    let value = button.value;
    let items = document.querySelectorAll(value)
    for(let i = 0; i < items.length; i++)
    {
        items[i].style.display = "none";
    }
    if(value === '.in-person')
    {
        button.textContent = 'VIRTUAL'
        button.value = '.virtual'
    } else {
        button.textContent = 'IN-PERSON'
        button.value = '.in-person'
    }
    items = document.querySelectorAll(button.value)
    for(let i = 0; i < items.length; i++)
    {
        items[i].style.display = "flex";
    }
}