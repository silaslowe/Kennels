import React, { useState, useEffect } from "react"

export const AnimalContext = React.createContext()

export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([])
  const [searchTerms, setSearchTerms] = useState("")

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then((res) => res.json())
      .then(setAnimals)
  }

  const getAnimalById = (id) => {
    return fetch(
      `http://localhost:8088/animals/${id}?_expand=location&_expand=customer`
    ).then((res) => res.json())
  }

  const addAnimal = (animal) => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(getAnimals)
  }

  const updateAnimal = (animal) => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(getAnimals)
  }

  const releaseAnimal = (animalId) => {
    return fetch(`http://localhost:8088/animals/${animalId}`, {
      method: "DELETE",
    }).then(getAnimals)
  }
  return (
    <AnimalContext.Provider
      value={{
        animals,
        addAnimal,
        getAnimals,
        searchTerms,
        updateAnimal,
        releaseAnimal,
        getAnimalById,
        setSearchTerms,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  )
}
