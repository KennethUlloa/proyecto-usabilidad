function getParam(name) {
    let params = new URL(document.location).searchParams;
    return params.get(name);
}

function actions(selector, callable) {
    document.querySelectorAll(selector)
    .forEach(item => callable(item))
}

function plusMinusListener(item) {
    let targetId = item.getAttribute('data-value-target');
    let action = item.getAttribute('data-action');
    let targetElement = document.getElementById(targetId);

    switch(action) {
        case 'minus': 
        item.addEventListener('click',() => {
        let min = Number(targetElement.min);
        let current = Number(targetElement.value);
        targetElement.value = Math.max(min, current - 1);
        }); 
        break;

        case 'plus': 
        item.addEventListener('click',() => {
            targetElement.value = Number(targetElement.value) + 1;
        }); 
        break;
    }
}

function addIdToLink(item) {
    let ref = item.getAttribute('href');
    ref += '?id=' + getParam("id");
    item.setAttribute('href',ref);
}


function registerAutoAction(selector, callable) {
    window.addEventListener('load', () => {
        actions(selector, callable);
    })
}

window.addEventListener('load', () => {
    actions("[data-action][data-value-target]", plusMinusListener);
    actions("[href][data-add-id]", addIdToLink)
    actions("a[href]",(item) => {item.addEventListener('keypress', (e) => {
        if(e.keyCode === 13){
            location.href = item.getAttribute('href');
        }
        
    })})
})
