var SelectDiv = document.querySelectorAll('[data-url]');
SelectDiv.forEach((item)=>{
fetch(item.dataset.url)
  .then((response) => response.json())
  .then((data) => 
  data.forEach((dataitem)=>
  {
item.innerHTML+=`
<div class="product_list_item">
    <img src="${dataitem.img}">
    <p class="product_name">${dataitem.title}</p>
    <p class="product_price">${dataitem.price}₺</p>
    <button type="button">Sepete ekle</button>
</div>`;
  })
  
  );
})