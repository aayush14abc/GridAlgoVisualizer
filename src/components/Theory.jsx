import React from 'react'
import {Link} from 'react-router-dom'
//import "./Theory.css"
import simpleback9 from "../components/algorithms/images/simpleback9.jpg"
const myStyle = {
  backgroundImage: `url(${simpleback9})`,
  fontSize: '20px',
  backgroundSize: 'cover',
  opacity: '1',
  text: '#00ff00',
};

const Theory = () => {
  return (
    <>
    <div style={myStyle}></div>
    <div className='theory-page'>
    <button className='btn'><Link to="/selectionSort">Selection Sort</Link></button>
    <button className='btn'><Link to="/bubblesort">Bubble Sort</Link></button>
    <button className='btn'><Link to="/insertionSort">Insertion Sort</Link></button>
    <button className='btn'><Link to="/mergeSort">Merge Sort</Link></button>
    <button className='btn'><Link to="/quickSort">Quick Sort</Link></button>
    <button className='btn'><Link to="/dfs">Breadth First Search</Link></button>
    <button className='btn'><Link to="/bfs">Depth First Search</Link></button>
    </div>
    </>
  )
}

export default Theory;