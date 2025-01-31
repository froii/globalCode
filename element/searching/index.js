const BASE_URL = '';

const input = document.getElementById('typeahead')
const list = document.getElementById('suggestions-list')
let timeoutId

const createElement = (text) => {
    const el = document.createElement('li')
    el.textContent = text
    el.addEventListener('click', () => {
        input.value = text
        list.innerHTML = ''
        clearTimeout(timeoutId)
    })
    return el
}

// Write your code here.
const fetchItem = () => {
    const url = new URL(BASE_URL)
    url.searchParams.set('text', input.value)

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const fragment = document.createDocumentFragment()
            data.forEach(text => fragment.appendChild(createElement(text)))
            list.replaceChildren(fragment)
        }).catch(err => console.log(err))
}

input.addEventListener('input', (e) => {
    console.log(11)
    if(timeoutId) clearTimeout(timeoutId)
    if(e.target.value.length === 0) return list.innerHTML = ''
    timeoutId = setTimeout(() => fetchItem(), 500)
})