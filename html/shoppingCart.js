let HomeCarts = document.querySelectorAll('.home-add-cart');
let WomanPantcarts = document.querySelectorAll('.women-pants-add-cart');
let MenTopCarts = document.querySelectorAll('.men-top-add-cart');
let MenPantCarts = document.querySelectorAll('.men-pants-add-cart');

let WomanTopCarts = document.querySelectorAll('.women-top-add-cart');
let MenShoeCarts = document.querySelectorAll('.men-shoe-add-cart');
let WomenShoeCarts = document.querySelectorAll('.women-shoe-add-cart');
let PackageCarts = document.querySelectorAll('.package-add-cart');
console.log("Number of woman pants items in this section " + WomanPantcarts.length);
console.log("Number of man shirt items in this section " + MenTopCarts.length);
console.log("Number of home items in this section " + HomeCarts.length);
console.log("Number of packages on this page "+ PackageCarts.length);


if(PackageCarts.length!==0) {
    let products = [
        {
            name: 'Package 1',
            tag: 'package1',
            price: 59.99,
            inCart: 0
        },
        {
            name: 'Package 2',
            tag: 'package2',
            price: 79.99,
            inCart: 0
        },
        {
            name: 'Package 3',
            tag: 'package3',
            price: 159.99,
            inCart: 0
        }
    ]
    for (let i = 0; i < PackageCarts.length; i++) {
        // console.log("my loop");
        PackageCarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }
}

if(HomeCarts.length!==0) {
    let products = [
        {
            name: 'Cargo Pant',
            tag: 'menpant1',
            price: 69.99,
            inCart: 0
        },
        {
            name: 'Walugi Signature',
            tag: 'menpant9',
            price: 39.99,
            inCart: 0
        },
        {
            name: 'Art Tee',
            tag: 'menshirt7',
            price: 29.00,
            inCart: 0
        },
        {
            name: 'Soft Joggers',
            tag: 'womenpant9',
            price: 39.99,
            inCart: 0
        },
        {
            name: 'Daniels Vans',
            tag: 'womenshoe9',
            price: 59.99,
            inCart: 0
        },
        {
            name: 'Classic Sleeve Tee',
            tag: 'womenshirt5',
            price: 25.99,
            inCart: 0
        },
        {
            name: 'Hot Sneaks',
            tag: 'menshoe2',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Workout Zip-Up',
            tag: 'womenshirt9',
            price: 39.99,
            inCart: 0
        },
        {
            name: 'White Aria Blouse',
            tag: 'womenshirt2',
            price: 35.99,
            inCart: 0
        },
        {
            name: 'Aladin Pant',
            tag: 'menpant6',
            price: 39.99,
            inCart: 0
        },
        {
            name: 'V-Neck Dolly',
            tag: 'womenshirt3',
            price: 37.99,
            inCart: 0
        },
        {
            name: 'Classic Van',
            tag: 'menshoe5',
            price: 45.99,
            inCart: 0
        }
    ]
    for (let i = 0; i < HomeCarts.length; i++) {
        // console.log("my loop");
        HomeCarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }
}

if(MenTopCarts.length!==0) {
    let products = [
        {
            name: 'Designed Tee',
            tag: 'menshirt1',
            price: 69.99,
            inCart: 0
        },
        {
            name: 'Graph Button Down',
            tag: 'menshirt2',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Basic Long Tee',
            tag: 'menshirt3',
            price: 37.99,
            inCart: 0
        },
        {
            name: 'Pirate Shirt',
            tag: 'menshirt4',
            price: 49.99,
            inCart: 0
        },
        {
            name: 'Business Shirt',
            tag: 'menshirt5',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Groovy Shirt',
            tag: 'menshirt6',
            price: 39.99,
            inCart: 0
        },
        {
            name: 'Art Tee',
            tag: 'menshirt7',
            price: 29.00,
            inCart: 0
        },
        {
            name: 'Fleece Zip-Up',
            tag: 'menshirt8',
            price: 29.99,
            inCart: 0
        },
        {
            name: 'Soft Dad Shirt',
            tag: 'menshirt9',
            price: 39.99,
            inCart: 0
        }
    ]
    for (let i = 0; i < MenTopCarts.length; i++) {
        // console.log("my loop");
        MenTopCarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }
}
if(WomanPantcarts.length!==0) {
    let products = [
        {
            name: 'Kim Cargo Pants',
            tag: 'womenpant1',
            price: 69.99,
            inCart: 0
        },
        {
            name: 'Pleated Pants',
            tag: 'womenpant2',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Yoga-ga Leggings',
            tag: 'womenpant3',
            price: 37.99,
            inCart: 0
        },
        {
            name: 'Fancy Pants',
            tag: 'womenpant4',
            price: 49.99,
            inCart: 0
        },
        {
            name: 'Classic Mom Jean',
            tag: 'womenpant5',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Picnic Pants',
            tag: 'womenpant6',
            price: 39.99,
            inCart: 0
        },
        {
            name: 'Striped Slacks',
            tag: 'womenpant7',
            price: 29.00,
            inCart: 0
        },
        {
            name: 'Skinny Jeans',
            tag: 'womenpant8',
            price: 29.99,
            inCart: 0
        },
        {
            name: 'Soft Joggers',
            tag: 'womenpant9',
            price: 39.99,
            inCart: 0
        }
    ]
    for (let i = 0; i < WomanPantcarts.length; i++) {
        // console.log("my loop");
        WomanPantcarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);

        })
    }
}
if(MenPantCarts.length!==0) {
    let products = [
        {
            name: 'Cargo Pant',
            tag: 'menpant1',
            price: 69.99,
            inCart: 0
        },
        {
            name: 'Pleated Pants',
            tag: 'menpant2',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Crisp Slacks',
            tag: 'menpant3',
            price: 37.99,
            inCart: 0
        },
        {
            name: 'Lounge Pants',
            tag: 'menpant4',
            price: 49.99,
            inCart: 0
        },
        {
            name: 'Hobo Chic',
            tag: 'menpant5',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Aladin Pant',
            tag: 'menpant6',
            price: 39.99,
            inCart: 0
        },
        {
            name: 'Striped Slacks',
            tag: 'menpant7',
            price: 29.00,
            inCart: 0
        },
        {
            name: 'Skinny Jeans',
            tag: 'menpant8',
            price: 29.99,
            inCart: 0
        },
        {
            name: 'Walugi Signature',
            tag: 'menpant9',
            price: 39.99,
            inCart: 0
        }

    ]


    for (let i = 0; i < MenPantCarts.length; i++) {
        // console.log("my loop");
        MenPantCarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);

        })
    }
}


if(WomenShoeCarts.length!==0) {
    let products = [
        {
            name: 'Joline Flats',
            tag: 'womenshoe1',
            price: 20.99,
            inCart: 0
        },
        {
            name: 'Kylie Runners',
            tag: 'womenshoe2',
            price: 35.99,
            inCart: 0
        },
        {
            name: 'Slip Ons',
            tag: 'womenshoe3',
            price: 30.99,
            inCart: 0
        },
        {
            name: 'Tie-up Boots',
            tag: 'womenshoe4',
            price: 59.99,
            inCart: 0
        },
        {
            name: 'Leather Boots',
            tag: 'womenshoe5',
            price: 95.99,
            inCart: 0
        },
        {
            name: 'Teal Slip Ons',
            tag: 'womenshoe6',
            price: 29.99,
            inCart: 0
        },
        {
            name: 'Leather Slip Ons',
            tag: 'womenshoe7',
            price: 149.00,
            inCart: 0
        },
        {
            name: 'Runners',
            tag: 'womenshoe8',
            price: 29.99,
            inCart: 0
        },
        {
            name: 'Daniels Vans',
            tag: 'womenshoe9',
            price: 59.99,
            inCart: 0
        }
    ]
    for (let i = 0; i < WomenShoeCarts.length; i++) {
        // console.log("my loop");
        WomenShoeCarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }
}

if(MenShoeCarts.length!==0) {
    let products = [
        {
            name: '08 Zips',
            tag: 'menshoe1',
            price: 169.99,
            inCart: 0
        },
        {
            name: 'Hot Sneaks',
            tag: 'menshoe2',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Yoga Shoes',
            tag: 'menshoe3',
            price: 37.99,
            inCart: 0
        },
        {
            name: 'Bright Whites',
            tag: 'menshoe4',
            price: 49.99,
            inCart: 0
        },
        {
            name: 'Classic Van',
            tag: 'menshoe5',
            price: 45.99,
            inCart: 0
        },
        {
            name: 'Deluxe Knit Scarf',
            tag: 'menshoe6',
            price: 89.99,
            inCart: 0
        }
    ]
    for (let i = 0; i < MenShoeCarts.length; i++) {
        // console.log("my loop");
        MenShoeCarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);

        })
    }
}

if(WomanTopCarts.length!==0) {
    let products = [
        {
            name: 'Cloudy Buttoned Shirt',
            tag: 'womenshirt1',
            price: 29.99,
            inCart: 0
        },
        {
            name: 'White Aria Blouse',
            tag: 'womenshirt2',
            price: 35.99,
            inCart: 0
        },
        {
            name: 'V-Neck Dolly',
            tag: 'womenshirt3',
            price: 37.99,
            inCart: 0
        },
        {
            name: 'Beige Dad Shirt',
            tag: 'womenshirt4',
            price: 49.99,
            inCart: 0
        },
        {
            name: 'Classic Sleeve Tee',
            tag: 'womenshirt5',
            price: 25.99,
            inCart: 0
        },
        {
            name: 'Cozy Fuzzy Hoodie',
            tag: 'womenshirt6',
            price: 69.99,
            inCart: 0
        },
        {
            name: 'Boho Chic Blouse',
            tag: 'womenshirt7',
            price: 49.00,
            inCart: 0
        },
        {
            name: 'Cameo Long Tee',
            tag: 'womenshirt8',
            price: 29.99,
            inCart: 0
        },
        {
            name: 'Workout Zip-Up',
            tag: 'womenshirt9',
            price: 39.99,
            inCart: 0
        }
    ]
    for (let i = 0; i < WomanTopCarts.length; i++) {
        // console.log("my loop");
        WomanTopCarts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);

        })
    }
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){

    // UPDATES THE NUMBER OF ITEMS IN THE USERS CART

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cart span').textContent = productNumbers+ 1;   // UPDATE ON SCREEN , NOW PLUS ONE ITEM IN CART
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;                   // UPDATE ON SCREEN , NOW ONE ITEM IN CART
    }
    setItems(product);

}

function setItems(product){

    // ADDING THE DATA OF THE PRODUCTS INTO THE CART

    let cartItems = localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] === undefined){
            cartItems = { ...cartItems, [product.tag]: product }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = { [product.tag]: product }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

/*    console.log("My cartCost is ", cartCost);
    console.log(typeof cartCost);*/

    if(cartCost != null){
        cartCost = parseFloat(cartCost);
        var newCartCost = cartCost + product.price;
        localStorage.setItem("totalCost", newCartCost);
        console.log("NEW TOTAL: ", newCartCost);
    } else {
        localStorage.setItem("totalCost", product.price);
        console.log("NEW TOTAL: ", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products1");
    let cartCost = localStorage.getItem('totalCost');

    document.getElementById('hiddenBox').value = cartCost;


    if (cartItems && productContainer){
        productContainer.innerHTML= '';

        Object.values(cartItems).map(item =>{
           productContainer.innerHTML += `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-5 product">
                        <img style="width: 170px; height: auto" alt="photo" src="/photos/${item.tag}.jpg"><br>
                        <span>${item.name}</span>
                    </div>
                    <div class="col-2">$${item.price.toFixed(2)}</div>
                    <div class="col quantity">
                        <a></a>
                        <span>${item.inCart}</span>
                        <a></a>
                    </div>
                    <div class="col-2 total">$${(item.inCart * item.price).toFixed(2)}
                    </div>
                </div>
            </div>
            `;

        });
        if(cartCost.includes(".")){

            let cartCost1 = parseFloat(cartCost).toFixed(2);

            productContainer.innerHTML += `
             <div class = "basketTotalContainer">
                 <h5 class="basketTotalTitle">
                     Cart Total
                 </h5>
                <h5 class="basketTotal">$<span id="totalPrice">${cartCost1}</span>
                </h5>
            </div>
            <div id="discount" class="basketTotalContainer">
                <h5 class="basketTotalTitle">Promotions</h5>
                <h5 id="couponAmount" class="basketTotal">$0</h5>
            </div>
            <div id="FINAL" class="basketTotalContainer">
                <h5 class="basketTotalTitle">Total Cart Price</h5>
                <h5 id="finalPrice" class="basketTotal">$${cartCost1}</h5>
            </div>
            `
        }else{
            let cartCost1 = parseFloat(cartCost).toFixed(2);

            productContainer.innerHTML += `
            <div class = "basketTotalContainer">
                 <h4 class="basketTotalTitle">
                     Cart Total
                 </h4>
                <h4 class="basketTotal">$
                    <div id="totalPrice>"${cartCost1}.00</div>
                </h4>
            </div>
            `
        }

    }
/*    let displayTotalOnCheckout = document.querySelector(".showTotal");
    displayTotalOnCheckout.innerHTML=
        `<div class="basketTotal">${parseFloat(cartCost).toFixed(2)}</div>`;*/
}

onLoadCartNumbers();
displayCart();
let prettyNumber = document.getElementById("cartNUMBER").textContent;
document.getElementById("secondSecretBox").value = prettyNumber;
console.log(document.getElementById("secondSecretBox").value);


