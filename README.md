# Fictional Yarn Shop for The Odin Project

[Live Demo](https://paposeco.github.io/shoppingcart/)

The purpose of this exercise was to develop an online website store, with a shopping cart. The checkout process wasn't developed.

![Fictional Yarn Shop Homepage](https://github.com/paposeco/shoppingcart/assets/13892562/0a1c8063-7dc2-4546-93eb-e2ff63a25f9b)
![Fictional Yarn Shop](https://github.com/paposeco/shoppingcart/assets/13892562/2a4a2b86-2f0e-4eea-b019-c59f62d7cc1b)
![Fictional Yarn Shop Shopping Cart](https://github.com/paposeco/shoppingcart/assets/13892562/699d9cba-f2d3-420c-bdea-2622ded39f24)


## Features

In my implementation, there's a nav bar with the website's pages: homepage, shop, contact and cart.

- Routes are kept on Routes.js. It also manages current items in cart, so that the information is shared between the other pages. This way, the user can leave the store and keep the same items on the cart.
- Homepage (Homepage.js): the suppliers are displayed, as well as a couple of "hot right now" products; if the user clicks on any of the aforementioned items, the user is redirected to the Shop at the correct location.
- Shop (Shop.js and ProductsForSale.js): the products are displayed in sections, separated by suppliers. Every item has information on the stock available and price/unit. The user can write or select the desired quantity below each product. The item is added to the cart once the user clicks the add to cart button. The ProductsForSale.js displays the product information as well as the buy button. Shop.js keeps track of current stock and calls ProductsForSale.js.
- Contact (Contact.js): an email and a form are displayed.
- Cart (DisplayCart.js): displays items added to cart, with name, thumbnail, quantity and sub-total. The total price is also displayed.

## Reflections

It was a struggle to manage sharing information between pages. I realized at the end that most people use redux, but I ended up just lifting the state to Routes. I do find it a bit weird to have the routes and items in cart, all in the same place.

I like the final result! I kept it fairly simple as usual, but if I had a yarn store this is something I would look for.
