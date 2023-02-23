const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () =>
{
    loadMusicData()
})

const loadMusicData = () =>
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2f3ded06e1msh5308b724a5d99e7p18c53bjsn3ee67d070dfa',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => 
            {
                topTwoHundred = response
                creaCards()
                //console.log('canciones', topTwoHundred)
            })
        .catch(err => console.error(err));
}

const creaCards = () =>
{
    topTwoHundred.forEach((song) =>
    {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}