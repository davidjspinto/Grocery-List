import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [updList, setUpdList] = useState ([]);
  const [newIngredient, setNewIngredient] = useState ('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const newIngredientObj = {
      id: new Date().getTime().toString(), 
      title: newIngredient
    };
    console.log(newIngredientObj)
    setUpdList((updList)=>[...updList, newIngredientObj])
    console.log(updList)
    setNewIngredient("")
  }
  
  const removeItem = (id) => {
    setUpdList(updList.filter((item) => item.id !== id))
  }

  return(
    <div>
    	<h2>grocery bud</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="newIngredient"
          type='text'
          onChange = {(e) => setNewIngredient(e.target.value)}
          value={newIngredient}
        />
        <button type="submit">Add</button>
      </form>
      <List 
        newIngredient={newIngredient}
        updList={updList}
        removeItem = {removeItem}
        handleItemEdit = {handleSubmit}
      />
    </div>
  )}

export default App
