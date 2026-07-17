# Redux Cart App

A shopping cart application built using **React**, **Redux Toolkit**, and **Tailwind CSS**. The application fetches products from an external API and allows users to manage their cart with persistent state and theme preferences.

## Features

* Fetch products from an external API
* Add products to the shopping cart
* Increase and decrease product quantity
* Remove products from the cart
* Calculate the total cart price
* Responsive product grid
* Cart displayed as a dropdown popup
* Light and Dark mode toggle
* Theme persistence using `localStorage`
* Cart persistence after page refresh using `localStorage`

## Technologies Used

* React
* Redux Toolkit
* React Redux
* Tailwind CSS
* JavaScript (ES6+)
* Font Awesome

## API

Product data is fetched from:

```text
https://api.escuelajs.co/api/v1/products
```

## Project Structure

```text
src/
├── app/
├── components/
├── context/
├── features/
│   ├── cart/
│   └── products/
├── App.jsx
├── main.jsx
└── index.css
```

## Future Improvements

* Product search
* Category filtering
* Product details page
* Checkout functionality
* User authentication

## Author

**Eman Sajjad**
