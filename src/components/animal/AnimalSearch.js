import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearch = (props) => {
  const { setSearchTerms } = useContext(AnimalContext)

  return (
    <>
      Animal Search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(keyEvent) => {
          setSearchTerms(keyEvent.target.value)
        }}
        placeholder="Seach for a aminal..."
      />
    </>
  )
}
