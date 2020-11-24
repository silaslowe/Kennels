import { useContext, useEffect } from "react"
import { EmployeeContext, EmployeeProvider } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { directive } from "@babel/types"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    console.log("Employee: Initial render")
    getEmployees()
  })
  return (
    <div className="employees">
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  )
}
