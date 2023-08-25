let currentTabIndex = 1;


window.addEventListener("load", e => {
    
    document.querySelectorAll('[data-tabindex]').forEach( item => {
       
        if(!item.hasAttribute('tabindex')) {
            item.setAttribute('tabindex', currentTabIndex);
            //currentTabIndex += 1;
        }
    });

    document.querySelectorAll('[data-parent-tab]').forEach(item => {
        console.log(item);
        let child_index = item.getAttribute('data-parent-tab');
        item.querySelectorAll('[data-child-tab]').forEach(child => {
            child.setAttribute('tabindex',child_index);

        });
    });
})