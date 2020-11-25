import { useContext, useEffect } from "react"
import { EmployeeContext, EmployeeProvider } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employees.css"

export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    console.log("Employee: Initial render")
    getEmployees()
  }, [])
  return (
    <div className="employees">
      <h1>Employees</h1>
      <button onClick={() => props.history.push("employees/create")}>Add Employee</button>
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  )
}
