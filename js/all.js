var obj = {
    data: {
        uuid: 'fafb5ae3-81cd-4ad3-9cd2-824d4284b57c',
        products: [],
    },
    getData: function() {
        var vm = this;
        var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

        axios.get(url)
        .then(function (response) {
        vm.data.products = response.data.data;
        vm.render();
        })
    },
    render: function() {
        var productsList = document.getElementById('productsList');
        var series = document.getElementById('series');
        var products = this.data.products;
        var str = '';
        var str1 = '';
        products.forEach(function(item) {
            str += `
            <div class="col-md-4 d-flex align-items-stretch">
                <div class="productCard rounded border p-2 mb-3">
                    <div class="imgimg">
                        <img src="${ item.imageUrl[0] }" alt="" class="img-fluid productCardImg" />
                        <button class="addCart btn d-flex" type="button">
                        <span class="material-icons">add_shopping_cart</span>
                        <span class="pl-2">加入購物車</span>
                    </button>
                    </div>
                    <h4>${ item.title }</h4>
                    <p>${ item.content }</p>
                    <div class="text-right m-2">
                        <span class="discount pr-2">NT$${ item.price }</span>
                        <span class="originPrice">NT$${ item.origin_price }</span>
                    </div>
                </div>
            </div>`;
            str1 += `<li>${ item.category }</li>`;
            });
            productsList.innerHTML = str;
            series.innerHTML = str1;
        }
    }

obj.getData();