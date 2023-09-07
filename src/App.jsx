import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './assets/Actor'
import Singer from './assets/Singer'

function App() {
  const actors = ['sakib', 'salman shah', 'manna','jasim' ]


  const singer = [
    {id:1, name:'Dr. Mahfuz rahman', age: 68},
    {id:2, name:'Eva rahaman', age: 38},
    {id:3, name:'James', age: 58},
    {id:4, name:'Emon', age: 48},
    {id:5, name:'Pritom', age: 28},
    
  ]

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        singer.map(singer =><Singer singer= {singer}></Singer>)
      }




      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }

      <Device name="laptop" price='54000'></Device>
      <Device name="mobile" price='25000'></Device>
      <Device name='Smart Watch' price='4500'></Device>
      <Developer></Developer>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Person grade="7" score='9'></Person>
      <Get></Get>
    
      
    </>
  )
function Device(Props){
  // console.log(Props)
  return(
    <h2>This Device: {Props.name} price: {Props.price}</h2>
  )
}



  function Student(){
    const age =35;
    const money = 25;
    const person = {name: 'Nazmul khan', age:12}
    return(
      
      
        <h1>Iam {person.name}with age: {age + money}</h1>
      
    )
  }
}
function Person(Props){
  console.log(Props)
  return(
    <div className='Person'>
      <h3>name:</h3>
      <p>age</p>
   
    </div>
  )
}
function Get(){
  const age= 57;
  const products = 'laptop';
  const brand = 'samsung';
  const price= 40000
  return(
  <h3>Hello {products.name} Bangladesh {age + price}</h3>
  )
}
// how to style input
function Developer(){
  const developerStyle ={
    margin:'20px',
    padding:'20px',
    border: '2px solid purple',
    borderRaduis: '20px'
    
  }
  return(
    <div style={developerStyle}>
      <h1>Developer</h1>
      <p>Coding</p>
    </div>
  )
}




export default App
