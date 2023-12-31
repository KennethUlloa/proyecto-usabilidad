async function getImage(src) {
    let response = await fetch(src,{headers:{'Content-Type':'image/svg+xml'}});
    if (response.ok) {
        return await response.text();
    }else {
        return '';
    }
    
}

window.addEventListener("load", () => {
    document.querySelectorAll('[data-svg]')
    .forEach(item => {
        if (item.hasAttribute('data-svg')) {
            let src = item.getAttribute('data-svg');
            
            getImage(src).then(text => {
                item.innerHTML = text 
                item.querySelector("svg").setAttribute('role','img');
            });
        }
    })
})
