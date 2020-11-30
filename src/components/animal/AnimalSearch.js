import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearch = (props) => {
  const { setSearch } = useContext(AnimalContext)

  return (
    <>
      Animal Search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => setSearch(keyEvent.target.value)}
        placeholder="Seach for a aminal..."
      />
    </>
  )
}
