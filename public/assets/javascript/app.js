const fetch = window.fetch

let resetForm = _ => {
    document.getElementById("myForm").reset()
}

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
            scores: [`${q1.value}`, `${q2.value}`, `${q3.value}`, `${q4.value}`, `${q5.value}`, `${q6.value}`, `${q7.value}`, `${q8.value}`, `${q9.value}`, `${q10.value}` ]
        })

    })
        .then(r => {
            alert('New Friend Submitted')
        })
        .catch(e => console.error(e))
    resetForm()
})
