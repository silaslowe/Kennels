import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

export default ({ animal }) => (
  <section className="animal">
    <h3 className="animal__name">
      <Link to={`/animals/${animal.id}`}>{animal.name}</Link>
    </h3>
    <div className="animal__breed">{animal.breed}</div>
  </section>
)
