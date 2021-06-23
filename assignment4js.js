var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

  //selection
  var mainSection = document.getElementById("main-section");

  //left div
  var leftDiv = document.createElement("div");
  leftDiv.setAttribute("class", "left-div");

  //left img
  var mainImg = document.createElement("img");
  mainImg.setAttribute("class", "main-img");
  mainImg.src = productData.photos;

  //append 
  leftDiv.appendChild(mainImg);
  mainSection.appendChild(leftDiv);

  //right div
  var rightDiv = document.createElement("div");
  rightDiv.setAttribute("class", "right-div");

  //name
  var itemName = document.createElement("h1");
  itemName.setAttribute("class", "item-name");
  itemName.innerText = productData.name;

  //brand
  var brandName = document.createElement("h4");
  brandName.setAttribute("class", "brand-name");
  brandName.innerText = productData.brand;

  //price
  var cost = document.createElement("h3");
  cost.setAttribute("class", "cost");
  cost.innerText = "Price: " + "Rs ";
  var span = document.createElement("span");
  span.innerText = productData.price;
  
  //description
  var des = document.createElement("div");
  des.setAttribute("class", "des");
  var desTitle = document.createElement("h3");
  desTitle.innerText = "Description";
  var details = document.createElement("p")
  details.setAttribute("class", "details");
  details.innerText = productData.description;

  //preview
  var prev = document.createElement("div");
  prev.setAttribute("class", "prev")
  var prevTitle = document.createElement("h3");
  prevTitle.innerText = " Product Preview";

  //images
  var prevImg =document.createElement("div");
  prevImg.setAttribute("class", "prev-img");
  for(var i=0; i < productData.photos.length; i++ ){
      var img = document.createElement("img");
      img.setAttribute("id", "img" + i);
      img.src = productData.photos[i];
      prevImg.appendChild(img);
  }

  //append
  prev.appendChild(prevTitle);
  prev.appendChild(prevImg);
  cost.appendChild(span);
  des.appendChild(desTitle);
  des.appendChild(details);
  rightDiv.appendChild(itemName);
  rightDiv.appendChild(brandName);
  rightDiv.appendChild(cost);
  rightDiv.appendChild(des);
  rightDiv.appendChild(prev);
  mainSection.appendChild(rightDiv);

var photo =[];
for(let i=0; i < productData.photos.length; i++ ){
    photo[i] = document.getElementById("img" + i);
    photo[i].addEventListener("click", function(){
    mainImg.src = productData.photos[i];
    photo[i].classList.add("active");
})
}






