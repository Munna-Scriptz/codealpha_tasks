let Display = document.querySelector('.result')

function DisplayResult(Input){
    let span = document.createElement('span')
    span.textContent = Input
    span.classList.add('pop')
    Display.appendChild(span)
}

function ClearDisplay(){
    Display.innerHTML = ''
}


function DeleteLast(){
    let spans = Display.querySelectorAll('span')
    if (spans.length > 0) {
        let last = spans[spans.length - 1];
        last.classList.add('pop-out')
        last.addEventListener('animationend', () => last.remove())
    }
}

// Calculate result-------------------
function Calculate(){
    try{
        let result = eval(Display.textContent)
        Display.innerHTML = ''
        DisplayResult(result)
    }
    catch(error){
        Display.innerHTML = 'Error';
    }
}

