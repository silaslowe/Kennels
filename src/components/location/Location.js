import React from "react"
import "./Locations.css"

export const Location = ({ location }) => (
  <section className="location">
    <h3 className="locaton__name">{location.name}</h3>
    <div className="location__address">{location.address}</div>
  </section>
)
