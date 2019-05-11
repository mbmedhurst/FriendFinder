
const fetch = window.fetch

document.querySelector('#submitBtn').addEventListener('click', e => {
    e.preventDefault()
    fetch('/friends', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('#name').value,
            photo: document.querySelector('#photo').value,
            scores: [`${q1.value}`, `${q2.value}`, `${q3.value}`]
        })
        
    })
        .then(r => {
            console.log('Friend Added')
            
        })
        .catch(e => console.error(e))
})
