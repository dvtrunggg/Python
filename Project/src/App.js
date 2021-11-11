import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import CardDetail from './components/pages/CardDetail'
import Search from './components/Search'
import SearchPage from './components/SearchPage'
import LIST_CART from './components/pages/List_Cart'
import Purchase from './components/pages/Purchase'
import {filter} from 'lodash'

// import Card_Product from '././components/data/data_products'
// import {orderBy as OrderBy} from 'lodash'
import axios from 'axios'
import './App.css';
// import CARD from './Reducer'





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      list_product: [],
      list_search: [],
      list_product_sort_filter: [],
      search:'',
      orderBy: '',
      orderDir: '',
      type_product:'',
      product_detail:[],
      total: 0,
      amount: 0,
      error_signup: {
        username: '',
        password: '',
        email: '',
        re_password: ''
      },
      url_search: '',
      my_list_cart: []
    };
      this.product_details = []
    // this.product_cart = {
    // list_cart:[],
    // number_cart:[]
    // }
    if(!JSON.parse(localStorage.getItem('list_cart')))
    {
      this.product_cart = {
        list_cart:[],
        number_cart:[]
      }
      console.log("Hereeeeeeeeeeeeeeeeeee")
    }
    else{
      this.product_cart = {
        list_cart:JSON.parse(localStorage.getItem('list_cart')),
        number_cart:JSON.parse(localStorage.getItem('number_cart'))
        
      }
      
      
    }
    
    // this.handle_login = this.handle_login(this)
    // this.handle_signup = this.handle_signup(this)
    // this.handle_clear = this.handle_clear(this)
    // this.handle_search = this.handle_search(this)
    // this.handle_logout = this.handle_logout(this)
    this.handle_sort = this.handle_sort.bind(this)
    this.handle_type = this.handle_type.bind(this)
    this.handle_detail = this.handle_detail.bind(this)
    this.handle_amount = this.handle_amount.bind(this)
    this.handle_add = this.handle_add.bind(this)
    this.handle_remove = this.handle_remove.bind(this)
    this.handle_clear_cart = this.handle_clear_cart.bind(this)
    this.handle_buy_cart = this.handle_buy_cart.bind(this)
  }

  async componentWillMount(){
    await axios({
      method:'GET',
      url: "http://localhost:8000/core/products/",
      headers: {
        'Content-Type': 'application/json',
    }
  })
  .then(reponse => {            
      this.setState({cart_list: reponse.data})
  })
  .catch(error => {
      console.log(error)
  }) 
  
  }

  async componentDidMount() {
    var total = 0
    for(var i = 0; i < this.product_cart.list_cart.length; i++)
    {
      total = Number(total) + Number(this.product_cart.list_cart[i].price)*Number(this.product_cart.number_cart[i])
    }
    this.setState({amount:this.product_cart.list_cart.length})
    this.setState({total: total})
    if (this.state.logged_in) {
     await fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
    await axios({
            method:'GET',
            url: "http://localhost:8000/core/products/",
            headers: {
              'Content-Type': 'application/json',
          }
        })
        .then(reponse => {            
            this.setState({list_product: reponse.data})
        })
        .catch(error => {
            console.log(error)
        })

        
    axios({
          method:'GET',
          url: "http://localhost:8000/core/add_card/",
          headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(reponse => {            
          console.log(reponse.data)
          var data_ = filter(reponse.data,['username',this.state.username])
          var list = []
          console.log(data_)
          if(data_.length > 0)
          {
            for(var i = 0; i < data_[0].list_cart.length; i++){
              console.log(data_[0].list_cart[i])
              if(data_[0].list_cart[i])
              {
                for(var j = 0; j < data_[0].list_cart[i].length; j++)
                {
                  list.push(data_[0].list_cart[i][j])
                }
              }
            }
            this.setState({my_list_cart: list})
          }
          
        })
        .catch(error => {
            console.log(error)
        }) 
  }
 

  handle_search = (e,data) => {
    this.setState({url_search: ''})
    if(!data.search)
    {
      alert("Value of search is null")
    }
    else
    {
      e.preventDefault();
      this.setState({search:data.search})
      axios({
        method:'POST',
        url: "http://localhost:8000/core/search/",
        data:data,
        headers: {
          'Content-Type': 'application/json',
      }
      })
      .then(reponse => {            
          this.setState({list_search: reponse.data})
          return <Redirect to='/search'/>
      })
      .catch(error => {
          console.log(error)
      }) 
    }
     
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if(json.token){
          localStorage.setItem('token', json.token);
          console.log(json.token)
          this.setState({
          logged_in: true,
          displayed_form: '', 
          username: json.user.username
        });
        }
        else{
          alert("User or password not correct")
        }
      });
      // Get data cart
      axios({
        method:'GET',
        url: "http://localhost:8000/core/add_card/",
        headers: {
          'Content-Type': 'application/json',
      }
      })
      .then(reponse => {            
        console.log(reponse.data)
        var data_ = filter(reponse.data,['username',data.username])
        var list = []
        console.log(data_)
        if(data_.length > 0)
        {
          for(var i = 0; i < data_[0].list_cart.length; i++){
            console.log(data_[0].list_cart[i])
            if(data_[0].list_cart[i])
            {
              for(var j = 0; j < data_[0].list_cart[i].length; j++)
              {
                list.push(data_[0].list_cart[i][j])
              }
            }
          }
          this.setState({my_list_cart: list})
        }
        
      })
      .catch(error => {
          console.log(error)
      }) 
  };
  handle_buy_cart = (data) => {
    fetch('http://localhost:8000/core/add_card/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        
        console.log(json)

      });
      this.handle_clear_cart()
      // Get data cart
      axios({
        method:'GET',
        url: "http://localhost:8000/core/add_card/",
        headers: {
          'Content-Type': 'application/json',
      }
      })
      .then(reponse => {            
        console.log(reponse.data)
        var data_ = filter(reponse.data,['username',data.username])
        var list = []
        console.log(data_)
        if(data_.length > 0)
        {
          for(var i = 0; i < data_[0].list_cart.length; i++){
            console.log(data_[0].list_cart[i])
            if(data_[0].list_cart[i])
            {
              for(var j = 0; j < data_[0].list_cart[i].length; j++)
              {
                list.push(data_[0].list_cart[i][j])
              }
            }
          }
          this.setState({my_list_cart: list})
        }
        
      })
      .catch(error => {
          console.log(error)
      }) 

  };
  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if(json.token)
        {
          if(json.username[0] !== "A user with that username already exists.")
          {
            localStorage.setItem('token', json.token);
            this.setState({
            logged_in: true,
            displayed_form: '',
            username: json.username
          });
          }
          else{
            alert("A user with that username already exists.")
          }
        }
        else{
          if(json.username[0] !== "A user with that username already exists.")
          {
            alert("Form not correct")
          }
          else{
            alert("A user with that username already exists.")
          }
        }
        
      });

    // Get data cart
    axios({
      method:'GET',
      url: "http://localhost:8000/core/add_card/",
      headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(reponse => {            
      console.log(reponse.data)
      var data_ = filter(reponse.data,['username',data.username])
      var list = []
      console.log(data_)
      if(data_.length > 0)
      {
        for(var i = 0; i < data_[0].list_cart.length; i++){
          console.log(data_[0].list_cart[i])
          if(data_[0].list_cart[i])
          {
            for(var j = 0; j < data_[0].list_cart[i].length; j++)
            {
              list.push(data_[0].list_cart[i][j])
            }
          }
        }
        this.setState({my_list_cart: list})
      }
      
    })
    .catch(error => {
        console.log(error)
    }) 
    
  };
  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };
  handle_clear = () => {
    this.setState({search:''})
    this.setState({type_product: ''})
    this.handle_clear_sort()
    console.log("Clear")
  };
  handle_clear_sort = () => {
    this.setState({orderDir:'',orderBy:''})

  };
  handle_sort = (orderBy, orderDir)=>{
    this.setState({orderBy:orderBy,
    orderDir:orderDir
    })
    var data = {
      search:this.state.search,
      type_sort: orderDir,
      type_product: this.state.type_product
    }
    var str = ''
    if(data.type_sort)
    {
      str += "sort=" + data.type_sort + "&"
    }
    if(data.type_product)
    {
      str += "type=" + data.type_product
    }
    this.setState({url_search: str})
    axios({
      method:'POST',
      url: "http://localhost:8000/core/products/sort/",
      data:data,
      headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(reponse => {            
      this.setState({list_product_sort_filter: reponse.data})
    })
    .catch(error => {
      console.log(error)
    }) 
  }

  handle_clear_type = () => {
    this.setState({type_product:''})
    this.handle_clear_sort()
  }
  handle_type = (value) => {
    this.setState({type_product:value})
    var data = {
      search:this.state.search,
      type_sort: this.state.orderDir,
      type_product: value
    }
    var str = ''
    if(data.type_sort)
    {
      str += "sort=" + data.type_sort+"&"
    }
    if(data.type_product)
    {
      str += "type=" + data.type_product
    }
    this.setState({url_search: str})
    axios({
      method:'POST',
      url: "http://localhost:8000/core/products/sort/",
      data:data,
      headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(reponse => {            
      this.setState({list_product_sort_filter: reponse.data})
    })
    .catch(error => {
      console.log(error)
    }) 

  }
  handle_detail = (data) => {
    this.setState({product_detail:data})
    this.product_details = data
  }
  handle_amount = (data, product) => {
    // var index = this.product_cart.list_cart.find(element => element.product_name === product.product_name)
    var index_of = this.product_cart.list_cart.indexOf(product.product_name)
    if(index_of !== -1)
    {
      var tmp = Number(this.product_cart.number_cart[index_of])+ Number(data)
      if(tmp <= this.product_cart.list_cart.count)
      {
        this.product_cart.number_cart[index_of] = Number(this.product_cart.number_cart[index_of])+ Number(data)
      }
      else{
        alert("Can't add more product because purchase quantity is greater than available quantity")
      }
    }
    else{
      if(Number(data) <= product.count)
      {
        this.product_cart.list_cart.push(product)
        this.product_cart.number_cart.push(Number(data))
      }
      else{
        alert("Can't add more product because purchase quantity is greater than available quantity")
      }
    }
    var total = 0
    for(var i = 0; i < this.product_cart.list_cart.length; i++)
    {
      total = Number(total) + Number(this.product_cart.list_cart[i].price)*Number(this.product_cart.number_cart[i])
    }
    this.setState({amount:this.product_cart.list_cart.length})
    this.setState({total: total})
    localStorage.setItem('list_cart',JSON.stringify(this.product_cart.list_cart))   
    localStorage.setItem('number_cart',JSON.stringify(this.product_cart.number_cart))
    console.log("Update")
    console.log(this.product_cart)
    console.log(JSON.parse(localStorage.getItem('list_cart')))
    
  }
  handle_add = (index) => {
    if( Number(this.product_cart.number_cart[index]) + Number(1) <= this.product_cart.list_cart[index].count)
    {
      this.product_cart.number_cart[index] = Number(this.product_cart.number_cart[index]) + Number(1)
      this.setState({amount:this.product_cart.list_cart.length})
      var total = 0
      for(var i = 0; i < this.product_cart.list_cart.length; i++)
      {
        total = Number(total) + Number(this.product_cart.list_cart[i].price)*Number(this.product_cart.number_cart[i])
      }
      this.setState({total: total})
      
    }
    else{
      alert("Can't add more product because purchase quantity is greater than available quantity")
    }
    localStorage.setItem('list_cart',JSON.stringify(this.product_cart.list_cart))   
    localStorage.setItem('number_cart',JSON.stringify(this.product_cart.number_cart))
    
  }
  handle_remove = (index) => {
    this.product_cart.number_cart[index] = Number(this.product_cart.number_cart[index]) - Number(1)
    if(this.product_cart.number_cart[index] === 0)
    {
      this.product_cart.list_cart.splice(index,1)
      this.product_cart.number_cart.splice(index,1)
    }
    this.setState({amount:this.product_cart.list_cart.length})
    var total = 0
    for(var i = 0; i < this.product_cart.list_cart.length; i++)
    {
      total = Number(total) + Number(this.product_cart.list_cart[i].price)*Number(this.product_cart.number_cart[i])
    }
    this.setState({total: total})
    localStorage.setItem('list_cart',JSON.stringify(this.product_cart.list_cart))   
    localStorage.setItem('number_cart',JSON.stringify(this.product_cart.number_cart))
  }
  handle_clear_cart = ()=>{
    this.product_cart.list_cart = []
    this.product_cart.number_cart = []
    this.setState({amount:0})
    this.setState({total: 0})
    localStorage.setItem('list_cart',JSON.stringify(this.product_cart.list_cart))   
    localStorage.setItem('number_cart',JSON.stringify(this.product_cart.number_cart))

  }
  componentDidUpdate(){
    
  }
  render(){
    
  return (
    <>

      <Router>
        <Navbar logged_in={this.state.logged_in} handle_logout={this.handle_logout} username={this.state.username} 
        handle_clear = {this.handle_clear} handle_clear_sort={this.state.handle_clear_sort} cart = {this.state.cart}
        total= {this.state.total} amount = {this.state.amount}/>
        <Search handle_search = {this.handle_search} handle_clear_type={this.handle_clear_type}/>     
          <Switch>
            <Route path="/" exact component={() => <Home list_product={this.state.list_product} search = {this.state.search}
            handle_detail={this.handle_detail} handle_clear = {this.handle_clear} my_list_cart = {this.state.my_list_cart}/>}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/product-detail" exact component={()=><CardDetail product_detail={this.product_details}
            search = {this.state.search} handle_clear = {this.handle_clear} handle_amount = {this.handle_amount}/>}/>
            <Route path="/sign-up" exact component={()=><SignUp handle_signup={this.handle_signup} logged_in={this.state.logged_in}
            search = {this.state.search}/>}/>
            <Route path="/sign-in" exact component={()=><SignIn handle_login={this.handle_login} logged_in={this.state.logged_in}
            search = {this.state.search}/>} />
            <Route path="/search" exact component={()=> <SearchPage list_product={this.state.list_product}
            list_search = {this.state.list_search} search = {this.state.search} handle_sort = {this.handle_sort}
            orderDir={this.state.orderDir} orderBy={this.state.orderBy} handle_type={this.handle_type}
            type_product = {this.state.type_product} handle_detail={this.handle_detail} product_detail={this.product_details}
            handle_clear = {this.handle_clear} list_product_sort_filter = {this.state.list_product_sort_filter}
            url_search = {this.state.url_search}/>}/>
            <Route path="/cart" exact component = {() => <LIST_CART product_cart = {this.product_cart} handle_add = {this.handle_add}
            handle_remove = {this.handle_remove} handle_clear_cart = {this.handle_clear_cart} search = {this.state.search} 
            handle_buy_cart = {this.handle_buy_cart} username={this.state.username}/>} />
            <Route path="/purchase" exact component = {() => <Purchase search = {this.state.search} 
            my_list_cart = {this.state.my_list_cart} username={this.state.username}/>} />
          </Switch>
      </Router>
    </>
  );
  }
}

export default App;



