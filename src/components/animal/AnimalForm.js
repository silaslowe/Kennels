import React, { useContext, useRef, useEffect } from "react"
import { AnimalContext, AnimalProvider } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"

export const AnimalForm = (props) => {
  const { addAnimal } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)

  const name = useRef(null)
  const breed = useRef(null)
  const location = useRef(null)

  useEffect(() => {
    getLocations()
  }, [])

  const constructNewAnimal = () => {
    /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
    const locationId = parseInt(location.current.value)
    const customerId = parseInt(localStorage.kennel_customer)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
      addAnimal({
        name: name.current.value,
        breed: breed.current.value,
        locationId,
        customerId,
      }).then(() => props.history.push("/animals"))
    }
  }
  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      {/* Name */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal Name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Animal Name"
          />
        </div>
      </fieldset>
      {/* Breed */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalBreed">Animal Breed: </label>
          <input
            type="text"
            id="animalBreed"
            ref={breed}
            required
            autoFocus
            className="form-control"
            placeholder="Animal Breed"
          />
        </div>
      </fieldset>
      {/* Location */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to Location</label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="animalLocation"
            className="form-control"
          >
            <option value="0">Select a Location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(ev) => {
          ev.preventDefault()
          constructNewAnimal()
          props.history.push("/animals/create")
        }}
        className="btn btn-primary"
      >
        Save Animal
      </button>
    </form>
  )
}
