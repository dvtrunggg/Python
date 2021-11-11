const DATA = [{
    "path": "images/food_1.jpg",
    "price": 14,
    "product_name": "Mixed vegetables",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "vegetables",
    "count": 30,
    "sold": 12
  },{
    "path": "images/food_2.jpg",
    "price": 0,
    "product_name": "Vegetarian skewers",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "vegetables",
    "count": 40,
    "sold": 0
  },{
    "path": "images/food_3.jpg",
    "price": 11,
    "product_name": "Broccoli Quinoa Cakes",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "cake",
    "count": 54,
    "sold": 0
  },{
    "path": "images/food_4.jpg",
    "price": 20,
    "product_name": "Tofu in tomato sauce",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "tofu",
    "count": 7,
    "sold": 0
  },{
    "path": "images/food_5.jpg",
    "price": 20,
    "product_name": "Mixed fruit cake",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "cake",
    "count": 30,
    "sold": 0
  },{
    "path": "images/food_6.jpg",
    "price": 15,
    "product_name": "Mixed fruit",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "fruit",
    "count": 21,
    "sold": 0
  },{
    "path": "images/food_7.jpg",
    "price": 7,
    "product_name": "Watermelon and black currant",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "fruit",
    "count": 44,
    "sold": 0
  },{
    "path": "images/food_8.jpg",
    "price": 12,
    "product_name": "Mixed fruit cups",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "fruit",
    "count": 31,
    "sold": 0
  },{
    "path": "images/food_9.jpg",
    "price": 9,
    "product_name": "Salad with vinegar",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "vegetables",
    "count": 62,
    "sold": 0
  },{
    "path": "images/food_10.jpg",
    "price": 20,
    "product_name": "Stewed potatoes",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "vegetables",
    "count": 15,
    "sold": 0
  },{
    "path": "images/food_11.jpg",
    "price": 5,
    "product_name": "Grilled sweet Potato",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "vegetables",
    "count": 28,
    "sold": 0
  },{
    "path": "images/food_12.jpg",
    "price": 0,
    "product_name": "Strawberry",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "fruit",
    "count": 44,
    "sold": 0
  },{
    "path": "images/food_13.jpg",
    "price": 19,
    "product_name": "Hamburger vegan",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "cake",
    "count": 70,
    "sold": 0
  },{
    "path": "images/food_14.jpg",
    "price": 51,
    "product_name": "Epic Vegetarian Tacos",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "cake",
    "count": 71,
    "sold": 0
  },{
    "path": "images/food_15.jpg",
    "price": 33,
    "product_name": "Epic Veggie Sandwich",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "cake",
    "count": 120,
    "sold": 0
  },{
    "path": "images/food_16.jpg",
    "price": 9,
    "product_name": "Lychee",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "fruit",
    "count": 504,
    "sold": 0
  },{
    "path": "images/food_17.jpg",
    "price": 26,
    "product_name": "Watermelon and black currant",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "fruit",
    "count": 32,
    "sold": 0
  },{
    "path": "images/food_18.jpg",
    "price": 27,
    "product_name": "Watermelon Mint Salad",
    "description": "Vegetarian food has health benefits and enhances resistance",
    "currency": "$",
    "type_product": "vegetables",
    "count": 19,
    "sold": 0
  }]

// import App from "../../App"

// // export default card_product;

// // import axios from 'axios'
// // var DATA = []
// // axios({
// //     method:'GET',
// //     url: "http://localhost:8000/core/products/",
// //     headers: {
// //     'Content-Type': 'application/json',
// //     }
// // })
// //     .then(reponse => {            
// //         DATA[0] =  reponse.data
// //     })
// //     .catch(error => {
// //         console.log(error)
// //     })  

// import React from 'react'
// import axios from 'axios'

// class DATA extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state = {
//             list_data: []
//         }
//     }
//     componentDidMount(){
//         axios({
//             method:'GET',
//             url: "http://localhost:8000/core/products/",
//             headers: {
//               'Content-Type': 'application/json',
//           }
//         })
//         .then(reponse => {            
//             this.setState({list_data: reponse.data})
//         })
//         .catch(error => {
//             console.log(error)
//         })  
//     }

//     render(){
//         return <App card_product = {this.state.list_data}/>
//     }
// }

export default  DATA

// export const DATA = () => {
//     axios({
//         method: 'GET',
//         url: 'http://localhost:8000/core/products/',
//         headers: {
//             'content-type': 'application/json',
//         },
//     })
//     .then(response => {

//         console.log(response.data)
//         return response.data

//     })
//     .catch(error => {
//         console.log(error)
//     })
// }


// const DATA = []

// const DATA = {
//     getAPI: () => {
//         axios({
//             method:'GET',
//             url: 'http://localhost:8000/core/products/',
//             headers: {
//                 'content-type': 'application/json',
//             },
//         })
//         .then(response => { 

//            return response.data

//         })
//         .catch(error => {
//             console.log(error)
//          }) 
//     }
// }

// export default DATA 
