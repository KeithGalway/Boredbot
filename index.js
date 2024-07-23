// click event listener on get-activity button
document.getElementById('get-activity').addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')                             // fetch call for activity suggestions api
        .then(response => response.json())                                           // get response data from return promise
        .then(data => {                                  
            document.getElementById('activity').textContent = data.activity          // display activity suggestion in activity element
            document.getElementById('title').textContent = '🦾 HappyBot 🦿'          // modify text content of title element
            document.body.classList.add('fun')                                       // modify class of body element
    })
})
