import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"

export const AnimalList = ({ history }) => {
  const { getAnimals, searchTerms, animals } = useContext(AnimalContext)

  const [filteredAnimals, setFilteredAnimals] = useState([])

  useEffect(() => {
    getAnimals()
  }, [])

  /*
        This effect hook function will run when the following two state changes happen:
            1. The animal state changes. First when it is created, then once you get the animals from the API
            2. When the search terms change, which happens when the user types something in the AnimalSearch component
    */

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = animals.filter((animal) => animal.name.toLowerCase().includes(searchTerms))
      setFilteredAnimals(subset)
    } else {
      setFilteredAnimals(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>Make Reservation</button>

      <div className="animals">
        {filteredAnimals.map((animal) => {
          return <Animal key={animal.id} animal={animal} />
        })}
      </div>
    </>
  )
}
