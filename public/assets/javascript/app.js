
const fetch = window.fetch

document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault()
    fetch('/friends', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#name'),
            photo: document.querySelector('#photo'),
            scores: [`${q1.value}`]
        })
    })
        .then(r => {
            alert('Friend Added')
        })
        .catch(e => console.error(e))
})
