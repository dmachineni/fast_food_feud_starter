import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  // console.log(props.menu_object)
  // console.log("---------------------")
  // console.log(nutritionFacts)
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.menu_object.item_name}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((item,idx) => (
          <NutritionalLabelFact key = {item.id} label = {item.label} value = {props.menu_object[item.attribute]}/>
        ))}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  // console.log("hiiiiiiii")
  console.log(props.item);
  console.log("---------------------")
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{
        props.label
      }</span>{" "}
      <span className="fact-value">{
        props.value
      }</span>
    </li>
  )
}

export default NutritionalLabel
