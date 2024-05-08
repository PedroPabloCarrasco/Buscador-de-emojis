import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Form from './components/Form'
import Result from './components/result'

import { useState } from 'react'

function App() {
  const[valueEmoji, setValueEmoji] = useState('fruit');
  
  return (
    <div className='hero'>
      
      <Header/>
      <Form setValueEmoji={setValueEmoji}/>
      <Result valueEmoji={valueEmoji}/>
      
      <h2></h2>
     
      
      <Footer/>
      
    </div>
  )
}
export default App