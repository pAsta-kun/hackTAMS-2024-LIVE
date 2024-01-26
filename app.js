function scheduleSwitch() {
    let button = document.getElementById('scheduelChangeBtn');
    let value = button.value;
    let items = document.querySelectorAll(value)
    for(let i = 0; i < items.length; i++)
    {
        items[i].style.display = "none";
        items[i].classList.remove('show');
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

function intialHide() {
    let items = document.querySelectorAll('.virtual')
    for(let i = 0; i < items.length; i++)
    {
        items[i].style.display = "none";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            console.log(entry.target.id === 'mobile')
            if(window.innerWidth > 641 && (entry.target.id === 'mobile' || entry.target.classList.contains('mobileTrack')))
            {
            
                entry.target.classList.remove('show')
                // console.log(document.getElementById('mobile'))
            }
            // else {
            //     console.log("target:    ")
            //     console.log(entry.target)
            //     console.log("what i'm lookin for:"   )
            //     console.log(document.getElementsByClassName('mobileScheduleSection')[0])
            // }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));

