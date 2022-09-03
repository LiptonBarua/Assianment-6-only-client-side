const loadPortel=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPortrel(data.data.news_category))
}
loadPortel()

const displayPortrel=(categorys)=>{
const allItems = document.getElementById('all-items')
categorys.forEach(element => {
const div = document.createElement('div');
div.innerHTML=`
<div class="container">
<div class="row">
<h5 onclick="loadCard('${element.category_id}')" style="margin-left: 100px;">${element.category_name}</h5>

</div>
</div>
`
allItems.appendChild(div)
});

}


const loadCard =(code)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${code}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCard(data.data))
}
// loadCard()

const displayCard = (cards)=>{
const cardContainer= document.getElementById('card-cantainer')
cardContainer.innerHTML=''
cards.forEach(card=>{
  console.log(card);
    const cardDiv= document.createElement('div')
    cardDiv.innerHTML=`
   <div class="container">
   <div class="card">
   <img src="${card.thumbnail_url}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${card.title}</h5>
     <p class="card-text">${card.details.length>150 ? card.details.slice(0,150)+'...': card.details}</p>
   </div>
 </div>
   </div>
    `
 cardContainer.appendChild(cardDiv)
})
}