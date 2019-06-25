const API_URL = "http://localhost:8090";

window.Shop = {
    getPizzas:function(){
        $.ajax({
            url: API_URL + "/menu",
            method: "GET"
        }).done(function(response) {
            console.log(response);
            Shop.displayPizzas(response.content)
        });
    },

    getPizzaHtml:function(product){

         // return `<div>${product.name}-----${product.description}</div>`

        // return `<div class="col-lg-4 d-flex ftco-animate">
        //     <div class="services-wrap d-flex">
        //       <a href="#" class="img" style="background-image: url(${product.imagePath});"></a>
        //       <div class="text p-4">
        //         <h3>${product.name}</h3>
        //         <p>${product.description}</p>
        //         <p class="price"><span>$${product.price}</span> <a href="#" class="ml-2 btn btn-white btn-outline-white">Order</a></p>
        //       </div>
        //     </div>
        //   </div>`


        return `<div class="col-md-4 text-center">
                        <div class="menu-wrap">
                          <a href="#" class="menu-img img mb-4" style="background-image: url(${product.imagePath});"></a>
                          <div class="text">
                            <h3><a href="#">${product.name}</a></h3>
                            <p>${product.description}</p>
                            <p class="price"><span>$${product.price}</span></p>
                            <p><a href="#" class="btn btn-white btn-outline-white">Add to cart</a></p>
                          </div>
                        </div>
                      </div>`
    },

    displayPizzas: function (products) {
        let pizzasHtml = "";
        products.forEach(item => pizzasHtml += Shop.getPizzaHtml(item));

        //cssSelector
        $('#pizza-container').html(pizzasHtml);
    },


}

Shop.getPizzas();