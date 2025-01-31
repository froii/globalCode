let draggedItem

document.querySelectorAll('.item').forEach((el)=> {
    el.addEventListener('dragstart', (ev) => draggedItem = ev.target)
    el.addEventListener('dblclick', function () {
        const unrankedEl = document.getElementById('unranked-drop-zone')
        if (unrankedEl !== this.parentNode) unrankedEl.appendChild(this);
    })
})

document.querySelectorAll('.drop-zone').forEach(el => {
    el.addEventListener('drop', function () {
        if(this !== draggedItem.parentNode) this.appendChild(draggedItem)
    })
    el.addEventListener('dragover', (ev) => ev.preventDefault())
})
