import React, { useState, useEffect } from "react"

export const AnimalContext = React.createContext()

export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([])

  const getAnimals = () => {
    return fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then(setAnimals)
  }

  const addAnimal = (animal) => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(getAnimals)
  }
  return (
    <AnimalContext.Provider value={{ animals, addAnimal, getAnimals }}>
      {props.children}
    </AnimalContext.Provider>
  )
}
