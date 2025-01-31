const checkbox = document.getElementById('candidate-switch')
let selectedCell

document.querySelectorAll('td:not(.given-number)').forEach(cell => cell.addEventListener('click', () => {
    if (selectedCell) selectedCell.classList.remove('selected');
    selectedCell = cell;
    selectedCell.classList.add('selected');
}))

document.querySelectorAll('.number-control').forEach(el => el.addEventListener('click', () => {
    if(!selectedCell) return
    if(checkbox.checked) {
        let candidates = selectedCell.querySelector('.candidates').textContent.split('')
        if(candidates.includes(el.textContent)) {
            candidates.splice(candidates.indexOf(el.textContent), 1)
        } else {
            candidates = [...candidates, el.textContent].sort()
        }
        selectedCell.querySelector('.candidates').textContent = candidates.join('')
    } else {
        selectedCell.querySelector('.value').textContent = el.textContent
    }
}))