import { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    console.log("Customers: Initial render")
    getCustomers()
  }, [])

  return (
    <div className="customers">
      {customers.map((customer) => <Customer key={customer.id} customer={customer} />).sort()}
    </div>
  )
}
