// create variables
const dateBtn = document.querySelector('.dateBtn')
const image = document.querySelector('.image')
const info = document.querySelector('.info')


// create event listener for date button
dateBtn.addEventListener('click', getImage) 
    



function getImage() {
    const userDate =  document.querySelector('#userDate').value
    console.log(userDate)
    // fetch nasa api
    fetch(`https://api.nasa.gov/planetary/apod?api_key=UIJQ1JX6609xd4NrstCSef75F1F8N0N6u23UFxS1&date=${userDate}`)
    .then( response => response.json())
    .then (data => {
        console.log(data)
        image.src = data.hdurl
        info.textContent = data.explanation
    })
    .catch( error => {
        console.log(`error${error}`)
    })
}