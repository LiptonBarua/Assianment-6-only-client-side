const loadPortel=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPortrel(data.data.news_category))
}
loadPortel()

const displayPortrel=(categorys)=>{
  toggleSpinner(true)
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
    

     <div class="d-flex">
     <div>
      <img class="rounded-circle" style="height: 56px; width: 56px;" src="${card.author.img}" alt="">
     </div>
     <div class="ms-2">
     <small>${card.author.name ? card.author.name : "Name is not found"}<small><br>
     <small>${card.author.published_date ? card.author.published_date : "Published date not is available"}<small>
     </div>
     <div>
      <p ${card.rating.number}></p>
     </div>
   </div>

   </div>
 </div>
   </div>
    `;
 cardContainer.appendChild(cardDiv)
})
toggleSpinner(false)
}


const toggleSpinner =(isLoading)=>{
  const spinnerContainer=document.getElementById('spinner-container')
  if(isLoading){
   spinnerContainer.classList.remove('d-none')
  }
  else{
    spinnerContainer.classList.add('d-none')
  }
}