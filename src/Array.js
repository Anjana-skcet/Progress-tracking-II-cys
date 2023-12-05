import React from 'react'
import ItemList from './ItemList';
const Array = () => {
    const itemsArray=['item1','item2','item3'];
  return (
    <div>
    <h1>Item List Example</h1>
    <ItemList items={itemsArray}/>
    </div>
  )
}

export default Array