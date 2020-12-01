import { useContext, useEffect } from "react"
import { EmployeeContext, EmployeeProvider } from "./EmployeeProvider"
import { Employee } from "./Employee"
import { Link } from "react-router-dom"
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
      {console.log(props.history)}
      <article className="employeeList">
        {employees.map((employee) => {
          return (
            <Link key={employee.id} to={`/employees/${employee.id}`}>
              <h3>{employee.name}</h3>
            </Link>
          )
        })}
      </article>
    </div>
  )
}
