const initialise = () => {
const BASE_URL = 'http://localhost:3000/movies/'
const inputForm = document.getElementById('form')
const inputValue = document.getElementById('searchByID')
const titleSection = document.getElementById('titleSection')
const summarySection = document.getElementById('summarySection')
const newTitleSection = document.createElement('p')
const newSummarySection = document.createElement('p')
titleSection.appendChild(newTitleSection)
summarySection.appendChild(newSummarySection)

const newMovieForm = document.getElementById("newMovieForm")
const newMovieTitle = document.getElementById('newMovieTitle')
const newMovieSummary = document.getElementById('newMovieSummary')

const updateMovieForm = document.getElementById('updateMovieForm')
const idOfUpdateMovie = document.getElementById('idOfUpdateMovie')
const updateMovieTitle = document.getElementById('updateMovieTitle')
const updateMovieSummary = document.getElementById('updateMovieSummary')

const deleteMovieForm = document.getElementById('deleteMovieForm')
const idOfMovieToDelete = document.getElementById('idOfMovieToDelete')


inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    getMovie(inputValue.value)
})

newMovieForm.addEventListener('submit', (event) => {
    event.preventDefault()
    addMovie(newMovieTitle.value, newMovieSummary.value)
})
  
updateMovieForm.addEventListener('submit', (event) => {
    event.preventDefault()
    updateMovie(idOfUpdateMovie.value, updateMovieTitle.value, updateMovieSummary.value)   
})

deleteMovieForm.addEventListener('submit', (event) => {
    event.preventDefault()
    deleteMovie(idOfMovieToDelete.value)
})
    
function getMovie(id){
    fetch(`http://localhost:3000/movies/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    newTitleSection.textContent = data.title
    newSummarySection.textContent = data.summary
  })
  .catch((error) => {console.error('Fetch Error:', error)})
}
    

function addMovie(title, summary){
    fetch(`http://localhost:3000/movies/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            summary: summary
        })
    })
}


function updateMovie(id, title, summary){
    fetch(`http://localhost:3000/movies/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            title: title,
            summary: summary
        })
    })
}

function deleteMovie(id){
    fetch(`http://localhost:3000/movies/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
}
    
    
    
    
    
    
    
}
document.addEventListener('DOMContentLoaded', initialise);