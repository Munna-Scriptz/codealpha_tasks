// ---------Api key
const ApiKey = 'nF0vdXn0ryht7yMnirZSqY0z2PD258YpOAkrUsblOCnEOdM1xtjTADBl'
let PerPage = 20
let CurrentPage = 1
// ----------------All doms
let SearchInput = document.querySelector('.input')
let SearchButton = document.querySelector('#filter-icon')
let ImageSection = document.querySelector('#image')
let LoadMore = document.querySelector('.ShineButton')
let ErrorMessage = document.querySelector('.ErrorMsg')
let Loader = document.querySelector('.loader')
let LoadText = document.querySelector('.text')
ErrorMessage.innerHTML = ''
// -------------Images Map
let MapImages = (images) =>{
    images.map((item) =>{
    // ----------Create Element
    let Ul = document.createElement('ul')
    ImageSection.appendChild(Ul)
    let UlLi = document.createElement('li')
    Ul.appendChild(UlLi)
    let liImage = document.createElement('img')
    UlLi.appendChild(liImage)

    // ----------Create Class
    Ul.classList.add('images')
    UlLi.classList.add('image_box')
    liImage.setAttribute(`src`, `${item.src.large2x}`)
    liImage.setAttribute('alt', 'Images')
    })
}
// ----------Fetch Api 
Loader.style = 'display:flex;'
LoadMore.style = 'display:none;'
const GetImages = (apiURL) => {
fetch(apiURL, {
        headers: {
            Authorization: ApiKey
        }
    })
    .then(res => res.json())
    .then(data => {
        Loader.style = 'display:none;'
        LoadMore.style = 'display:flex;'
        MapImages(data.photos)
        
        if(data.photos.length == 0){
            LoadText.classList.add('text2')
            LoadText.setAttribute('data-text' , 'No Result Available')
            Loader.style = 'display:flex;'
            LoadMore.style = 'visibility:hidden; opacity: 0;'
            ErrorMessage.style = `opacity: 1;`
        }
    })
        
}
    
// -----------Get image
GetImages(`https://api.pexels.com/v1/curated?page=${CurrentPage}&per_page=${PerPage}`)

// ---------Load More Images
LoadMore.addEventListener('click' ,()=>{
    CurrentPage++
    GetImages(`https://api.pexels.com/v1/curated?page=${CurrentPage}&per_page=${PerPage}`)
    
})

// -------------Search Input
let HandelSearch = () =>{
    CurrentPage = 1
    ImageSection.innerHTML = ''
    GetImages(`https://api.pexels.com/v1/search?query=${SearchInput.value}&page=${CurrentPage}&per_page=${PerPage}`)

}
