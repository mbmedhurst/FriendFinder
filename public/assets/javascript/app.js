const fetch = window.fetch

let resetForm = _ => {
    document.getElementById("myForm").reset()
}   

let clearPage = _ => {
    document.querySelector('#myForm').innerHTML = ''
    document.querySelector('header').innerHTML = ''
}

let displayResult = (r) => {
    document.querySelector('#result').innerHTML = `Your closest match is ${r.name} with a low score of ${r.lowScore}.`
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
        .then(r => r.json())
        .then(r => {
            console.log(`Your closest match is ${r.name} with a low score of ${r.lowScore}.`)
        })
        .catch(e => console.error(e))
    resetForm()
})
