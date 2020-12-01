import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearch = (props) => {
  const { searchTerms, setSearchTerms } = useContext(AnimalContext)

  return (
    <>
      Animal Search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => {
          console.log("Searched Term")
          setSearchTerms(keyEvent.target.value)
          console.log(searchTerms)
        }}
        placeholder="Seach for a aminal..."
      />
    </>
  )
}
