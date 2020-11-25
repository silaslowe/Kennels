import React from "react"
import "./Animal.css"

export const Animal = ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <div className="animal__breed">Breed: {animal.breed}</div>
    <div className="animal__location">Clinic: {location.name}</div>
    <div className="animal__owner">Customer: {customer.name}</div>
  </section>
)
