import { useState } from 'react'
import './App.css'
import TreeView from "./components/treeview";
import menus from "./components/treeview/data";

function App() {

  return (
    <div className="App">
      {/* Tree view component/menu UI component / recursive navigation menu */}
       <TreeView menus={menus} /> 
    </div>
  )
}

export default App
