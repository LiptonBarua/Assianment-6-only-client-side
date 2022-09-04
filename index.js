const loadPortel=()=>{
    const url=`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPortrel(data.data.news_category))
}
loadPortel()

const displayPortrel=(categorys)=>{
// const totol = document.getElementById('no-found-message')
// totol.textContent ='';
// const totalDIV =document.createElement('div')
// totalDIV.innerHTML =`
// <p>${categorys.length}</p>
// `
// totol.appendChild(totalDIV)
  // console.log(categorys.length);
const allItems = document.getElementById('all-items')
categorys.forEach(element => {
 let number=element.length
 console.log(number);



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
  // const spinnerContainer=document.getElementById('spinner-container')
  // spinnerContainer.classList.remove('d-none')
    const url=`https://openapi.programming-hero.com/api/news/category/${code}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCard(data.data))
}
// loadCard()

const displayCard = (cards)=>{
const cardContainer= document.getElementById('card-cantainer')

cardContainer.innerHTML=''
// spinnerContainer.classList.add('d-none')
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
   <h5 style="margin-left: 20px; margin-top: 16px;" ><i class="fa-solid fa-arrow-right text-primary"></i></h5>
   <button onclick="displayModel('${card.category_id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
 </div>
   </div>
    `;
 cardContainer.appendChild(cardDiv)
})
// toggleSpinner(false)
}

// .................Model Selection.............

const displayModel=(news_id)=>{
 const url=` https://openapi.programming-hero.com/api/news/${news_id}`
 fetch(url)
 .then(res=>res.json())
 .then(data1=>displayModelCatagories(data1.data))
}

const displayModelCatagories=data=>{
const modelBody=document.getElementById('model-body')
modelBody.innerHTML=`
<img src="${data.image_url}" alt="">
`
}


// const toggleSpinner =(isLoading)=>{
  
//   if(isLoading){
  
//   }
//   else{
   
//   }
// }