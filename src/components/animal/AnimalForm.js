import React, { useContext, useState, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"

export const AnimalForm = (props) => {
  const { locations, getLocations } = useContext(LocationContext)
  const { addAnimal, animals, updateAnimal, getAnimals } = useContext(AnimalContext)

  const [animal, setAnimal] = useState({})

  const editMode = props.match.params.hasOwnProperty("animalId")

  const handleControlledInputChange = (e) => {
    const newAnimal = Object.assign({}, animal)
    newAnimal[e.target.name] = e.target.value
    setAnimal(newAnimal)
  }
  const getAnimalInEditMode = () => {
    if (editMode) {
      const animalId = parseInt(props.match.params.animalId)
      const selectedAnimal = animals.find((a) => a.id === animalId) || {}
      setAnimal(selectedAnimal)
    }
  }
  useEffect(() => {
    getAnimals()
    getLocations()
  }, [])

  useEffect(() => {
    getAnimalInEditMode()
  }, [animals])

  const constructNewAnimal = () => {
    const locationId = parseInt(animal.locationId)
    console.log("in construct", animal.locationId)
    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      if (editMode) {
        updateAnimal({
          id: animal.id,
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.treatment,
          customerId: parseInt(localStorage.getItem("kennel_customer")),
        }).then(() => props.history.push("/animals"))
      } else {
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: locationId,
          treatment: animal.treatment,
          customerId: parseInt(localStorage.getItem("kennel_customer")),
        }).then(() => props.history.push("/animals"))
      }
    }
  }
  return (
    <form className="animalForm">
      <h2 className="animalForm__title">{editMode ? "Update Animal" : "Admit Animal"}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal Name:</label>
          <input
            type="text"
            name="name"
            required
            autoFocus
            className="form-control"
            prototype="varchar"
            placeholder="Animal Name"
            defaultValue={animal.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="breed">Animal breed: </label>
          <input
            type="text"
            name="breed"
            required
            className="form-control"
            proptype="varchar"
            placeholder="Animal breed"
            defaultValue={animal.breed}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="locationId">Location: </label>
          <select
            name="locationId"
            className="form-control"
            proptype="int"
            value={animal.locationId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="treatment">Treatments: </label>
          <textarea
            type="text"
            name="treatment"
            className="form-control"
            proptype="varchar"
            value={animal.treatment}
            onChange={handleControlledInputChange}
          ></textarea>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault()
          constructNewAnimal()
        }}
        className="btn btn-primary"
      >
        {editMode ? "Save Updates" : "Make Reservation"}
      </button>
    </form>
  )
}
