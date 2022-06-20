import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"


import { createDataSet } from "./data/dataset"
import "./App.css"
import { useState } from "react"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [category, setCategory] = useState("");
  const handleOnClick = (label) => {
    setCategory(label);
  }

  const [restaurant, setRestaurant] = useState("");
  const handleOnClickRestaurant = (label) => {
    setRestaurant(label);
  }

  const [menu_item, setMenu] = useState([]);
  const handleOnClickMenu = (label) => {
    setMenu(label);
  }


  var currentMenuItems = data.filter((item) => {return item.food_category == category && item.restaurant == restaurant});
  // console.log(menu_item)
  // console.log(currentMenuItems)
  // var item_object = currentMenuItems.find((item)=>{
  //   return item.item_name == menu_item;
  // })
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map( (item, idx) =>(
            // <p className = "category">{item}</p>
            <Chip handleOnClick={handleOnClick} label={item} key = {idx} isActive ={category===item ? true : false}/>
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title = {appInfo.title}
                tagline = {appInfo.tagline} 
                description = {appInfo.description}  />
     
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map( (item,idx) => (
            <Chip handleOnClick={handleOnClickRestaurant} label={item} key = {idx} isActive ={item===restaurant ? true : false}/>
            ))}
          
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions = {appInfo.instructions.start}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item,idx) => {
              return (<Chip handleOnClick={handleOnClickMenu} label={item.item_name} key = {idx} menu = {item} isActive={menu_item ? true : false}/>)
            })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{
            <NutritionalLabel menu_object = {menu_item}/>
          }</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
