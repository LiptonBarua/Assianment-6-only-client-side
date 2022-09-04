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
<h6 onclick="loadCard('${element.category_id}')" style="margin-left: 100px;">${element.category_name}</h6>

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
document.getElementById('demo').innerHTML= cards.length;
if(cards.length===0){
  alert('value is not found')
}

cardContainer.innerHTML=''

cards.forEach(card=>{
    const cardDiv= document.createElement('div')
    cardDiv.innerHTML=`
   <div class="container">
   <div class="card pb-2">
   <img src="${card.thumbnail_url}" class="img-fluid" alt="...">
   <div class="card-body">
     <h5 class="card-title">${card.title}</h5>
     <p class="card-text">${card.details.length>100 ? card.details.slice(0,100)+'...': card.details}</p>
   </div>

   <div class="d-flex">
   <div>
   <img class="rounded-circle ms-2" style="height: 56px; width: 56px;" src="${card.author.img}" alt="">
   </div>
  <div class="ms-2">
  <small>${card.author.name ? card.author.name : "Name is not found"}<small><br>
  <small>${card.author.published_date ? card.author.published_date : "Published date not is available"}<small>
  </div>
 </div>
   <h5 style="margin-left: 20px; margin-top: 16px;"><i class="fa-solid fa-eye"></i> ${card.total_view ? card.total_view : "Not a total View"}</h5>
   <button onclick="displayModel('${card._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Click Here
</button>
 </div>
   </div>
    `;
 cardContainer.appendChild(cardDiv)
})
toggleSpinner(false)
}

// .................Model Selection.............

const displayModel=(news_id)=>{
 const url=` https://openapi.programming-hero.com/api/news/${news_id}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayModelCatagories(data.data[0]))
}

const displayModelCatagories=(card)=>{
const modelBody=document.getElementById('model-body')
modelBody.innerHTML=`
<img src="${card.image_url}" alt="" class="img-fluid">
<h3>${card.title}</h3>
<p>${card.details.length>150? card.details.slice(0,150)+'...': card.details}</p>
<div class="d-flex">
<div>
<img class="rounded-circle ms-2" style="height: 56px; width: 56px;" src="${card.author.img}" alt="">
</div>
<div class="ms-2">
<small>${card.author.name ? card.author.name : "Name is not found"}<small><br>
<small>${card.author.published_date ? card.author.published_date : "Published date not is available"}<small>
</div>
</div>
`
}


const toggleSpinner =(isLoading)=>{
  const displayContainer = document.getElementById('spinner-container')
  if(isLoading===true){
    displayContainer.classList.remove('d-none')
  }
  else{
    displayContainer.classList.add('d-none')
  }
}