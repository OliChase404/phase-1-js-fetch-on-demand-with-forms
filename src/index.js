const initialise = () => {

const inputForm = document.getElementById('form')
const inputValue = document.getElementById('searchByID')
const titleSection = document.getElementById('titleSection')
const summarySection = document.getElementById('summarySection')
const newTitleSection = document.createElement('p')
const newSummarySection = document.createElement('p')
const newMovieForm = document.getElementById("newMovieForm")
const newMovieTitle = document.getElementById('newMovieTitle')
const newMovieSummary = document.getElementById('newMovieSummary')
titleSection.appendChild(newTitleSection)
summarySection.appendChild(newSummarySection)

inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    getMovie(inputValue.value)
})

newMovieForm.addEventListener('submit', (event) => {
    event.preventDefault()
    addMovie(newMovieTitle.value, newMovieSummary.value)
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
            summary: summary,
        })
    })
    

}
    
    
    
    
    
    
    
}
document.addEventListener('DOMContentLoaded', initialise);