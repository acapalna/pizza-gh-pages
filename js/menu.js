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

        return `<div class="col-lg-4 d-flex ftco-animate">
                    <div class="services-wrap d-flex">
                      <a href="#" class="img" style="background-image: url(images/pizza-1.jpg);"></a>
                        <div class="text p-4">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <p class="price"><span>$${product.price}</span> <a href="#" class="ml-2 btn btn-white btn-outline-white">Order</a></p>
                        </div>
                    </div>
                </div>`
    },

    displayPizzas: function (pizzas) {
        let pizzasHtml = "";
        pizzas.forEach(item => pizzasHtml += Shop.getPizzaHtml(item));

        //cssSelector
        $('#pizza-container').html(pizzasHtml);
    },


}

Shop.getPizzas();