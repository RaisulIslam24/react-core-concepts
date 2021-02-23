import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const friends = ['Shifat', 'Dhrubo', 'Hridoy']
  const products = [
    {name: 'Laptop', price:'$90.99'},
    {name: 'Phone', price:'$60.99'},
    {name: 'Watch', price:'$20.99'},
    {name: 'Tablet', price:'$50.99'},  
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <Todos></Todos>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Nibir" occupation="Student"></Person>
        <Person name="Niloy" occupation="Student"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Todos(){
  const [todos, setTodos] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data));
  }, [])

  return(
    <div>
      <h3>Dyamic Todos: {todos.length}</h3>
      <ul>
        {
          todos.map(todos => <li>{todos.title}</li>)
        }
      </ul>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'blue',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold', width:'400px', margin:'10px'}}>
      <h3>My name: {props.name}</h3>
      <p>My Profession: {props.occupation}</p>
    </div>
  )
}

export default App;
