const services = [
     {
         picture: "images/stock-photo-woman-riding-a-horse-in-jumper-ring-625839731 1.jpg",
         title: "Занятие на манеже ",
         price: "400 руб./30 мин."
     },
    {
         picture: "images/stock-photo-woman-riding-a-horse-in-jumper-ring-625864208 1.jpg",
         title: "Занятие на манеже ",
         price: "700 руб./60 мин."
     },
     {
         picture: "images/stock-photo-young-couple-riding-330102227 1.jpg",
         title: "Прогулка на природе (лес/поле)",
         price: "800 руб./60 мин."
     },
      {
         picture: "images/stock-photo-young-couple-with-horse-330138794 2.jpg",
         title: "Аренда лошади на фотосессию ",
         price: "800 руб./60 мин."
     },
     {
         picture: "images/stock-photo-kid-riding-white-horse-during-horseback-lessons-1562469781 1.jpg",
         title: "Катание по кругам ",
         price: "100 руб./(2 круга по манежу или 1 круг по футбольному полю)"
     },
     {
         picture: "images/stock-photo-landscape-70029271 1.jpg",
         title: "Зимние сани по лагерю ",
         price: "1500 руб./(60 мин.)"
     }

 ]

 const service = {
     getTitle: function () {
         return this.title
     },
     getPrice: function () {
         return this.price
     },
     getPicture: function () {
         return this.picture
     }
 }

 const orderForm = document.getElementById('orderForm');
 const closeOrderForm = document.getElementById('closeOrderForm');

 closeOrderForm.onclick = function () {
    orderForm.style.display = "none"

}

 for ( let i = 0; i < services.length; i++) {
     service.getPicture.bind(services[i])()
     const serviceTitle = service.getTitle.bind(services[i])()
     const servicePrice = service.getPrice.bind(services[i])()
     const servicePicture = service.getPicture.bind(services[i])()

     const servicesWrapper = document.getElementById('services-wrapper-all')
     const servicesHTML = ` 
         <img src="${servicePicture}">
         <div id="services__description">
             <h3 id="services_1"> ${serviceTitle}</h3>
             <div id="services_price_1" class="services__price">${servicePrice}</div>
         </div>
         `

         const div = document.createElement(`div`)
     div.classList.add("services-wrapper")
     div.onclick = function () {
         orderForm.style.display = "block"
         const orderFormServices = document.getElementById('orderFormServices')
         const orderFormPrice = document.getElementById('orderFormPrice')
    
         orderFormServices.innerHTML=serviceTitle
         orderFormPrice.innerHTML=servicePrice
     }

     div.innerHTML = servicesHTML
     servicesWrapper.appendChild(div)

 }

 const orderFormNumberGuests = document.getElementById('orderFormNumberGuests')
 const orderFormTime = document.getElementById('orderFormTime')
 const orderFormPhone = document.getElementById('orderFormPhone')
 const orderFormName = document.getElementById('orderFormName')
 sendOrderForm.onclick = function() {

    if (orderFormNumberGuests.value) {
        orderFormNumberGuests.style.border="1px solid grey "
    } else {
        orderFormNumberGuests.style.border="2px solid red "
    }


    if (orderFormTime.value) {
        orderFormTime.style.border="1px solid grey "
    } else {
        orderFormTime.style.border="2px solid red "
    }


    if (orderFormPhone.value) {
        orderFormPhone.style.border="1px solid grey "
    } else {
        orderFormPhone.style.border="2px solid red "
    }


    if (orderFormName.value) {
        orderFormName.style.border="1px solid grey "
    } else {
        orderFormName.style.border="2px solid red "
    }


    if(orderFormNumberGuests.value && orderFormTime.value && orderFormPhone.value && orderFormName.value) {
        orderForm.style.display = "none"
        console.group()
        console.log('Количество гостей:',orderFormNumberGuests.value)
        console.log('Время проката:',orderFormTime.value)
        console.log('Номер телефона:',orderFormPhone.value)
        console.log('Имя:',orderFormName.value)
        console.groupCollapsed ()
    }
    
 }








 //  let element_services_1 = document.getElementById('services_1');
 //  let element_services_2 = document.getElementById('services_2');
 //  let element_services_3 = document.getElementById('services_3');
 //  let element_services_4 = document.getElementById('services_4');
 //  let element_services_5 = document.getElementById('services_5');
 //  let element_services_6 = document.getElementById('services_6');

 //  element_services_1.innerHTML = services[0];
 //  element_services_2.innerHTML = services[1];
 //  element_services_3.innerHTML = services[2];
 //  element_services_4.innerHTML = services[3];
 //  element_services_5.innerHTML = services[4];
 //  element_services_6.innerHTML = services[5];


 //  let element_services_price_1 = document.getElementById('services_price_1');
 //  let element_services_price_2 = document.getElementById('services_price_2');
 //  let element_services_price_3 = document.getElementById('services_price_3');
 //  let element_services_price_4 = document.getElementById('services_price_4');
 //  let element_services_price_5 = document.getElementById('services_price_5');
 //  let element_services_price_6 = document.getElementById('services_price_6');

 //  element_services_price_1.innerHTML = services_price_1;
 //  element_services_price_2.innerHTML = services_price_2;
 //  element_services_price_3.innerHTML = services_price_3;
 //  element_services_price_4.innerHTML = services_price_4;
 //  element_services_price_5.innerHTML = services_price_5;
 //  element_services_price_6.innerHTML = services_price_6;