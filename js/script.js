// const accesskey = "PNrEDcz1Kz-lwwi-8Iz-NqUaELn6RD6p-_Yp4SjjMUI"

// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn")

// let keyword = "";
// let page  = 1 ;

// async function searchImages() {
//     keyword = searchBox.value;
//     const url = 'https://api.unsplash.com/search/photos?page=1&query=office&client_id=PNrEDcz1Kz-lwwi-8Iz-NqUaELn6RD6p-_Yp4SjjMUI&client_id=${accessKey}';
//     const response = await fetch(url);
//     const data = await response.json();
//     const result = data.results;
//     results.map((result)=>{
//         const image = document.createElement("img");
//         image.src = result.urls.small;
//         const imageLink = document.createElement("a");
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";
//         imageLink.appendChild(image);
//         searchResult.appendChild(imageLink)
//     })
// }
// searchForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     page = 1;
//     searchImages() 
// })
const accesskey = "PNrEDcz1Kz-lwwi-8Iz-NqUaELn6RD6p-_Yp4SjjMUI";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }
    const result = data.results;
    result.map((item) => {
        const image = document.createElement("img");
        image.src = item.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = item.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})