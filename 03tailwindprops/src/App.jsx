import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  //const username = "Sagar"

  const myObj = {   // object
    name: "Sagar",
    age: 21,
  }

  const myArray = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-500 text-white p-5 '>Tailwind Test</h1>
      {/* <Card channel = "codewithme" someObj = {myArray}/> */}
      <Card channel = "codewithme" username = "sagar shelake" textbtn = "text me"/>
      <hr />
      <Card channel = "codewithYou" username = "aniket lohar" />
    </>
  )
}

export default App
