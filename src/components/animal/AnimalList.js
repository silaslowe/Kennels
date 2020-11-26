import { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { Animal } from "./Animal"
import "./Animal.css"

export const AnimalList = (props) => {
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    console.log("AnimalList: Inital render")
    getLocations()
      .then(getCustomers)
      .then(getAnimals)
      .then(() => console.log("AFTER"))
  }, [])

  return (
    <div className="animals">
      <h1>Animals</h1>

      <button onClick={() => props.history.push("animals/create")}>Add Animal</button>

      {animals.map((animal) => {
        const owner = customers.find((c) => c.id === animal.customerId)
        const clinic = locations.find((l) => l.id === animal.locationId)

        return <Animal key={animal.id} location={clinic} customer={owner} animal={animal} />
      })}
    </div>
  )
}
