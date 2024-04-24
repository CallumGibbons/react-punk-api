import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import { Beer } from './assets/Data/types'
import beers from './assets/Data/beers'
import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filters, setFilters] = useState<string[]>([]);
  
  
  
  
  
  
  
  return (
    <div>
    <Nav/>
    <beerCardContainer/>
    </div>
  )
}


export default App
