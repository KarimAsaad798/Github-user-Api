const form = document.getElementById('myForm');


form.addEventListener('submit', function(e) {

 e.preventDefault()

const search = document.getElementById('search').value
const originalName = search.split(' ').join('')

 alert(originalName)

 fetch('https://api.github.com/users/'+originalName).then((result) => result.json())
 .then((data) => {

    console.log(data)
 })

    
})

