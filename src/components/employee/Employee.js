import React from "react"
import "./Employees.css"

export const Employee = ({ employee }) => (
  <section className="employee">
    <h3 className=" employee_name">{employee.name}</h3>
    <div className="employee__id">ID: {employee.id}</div>
  </section>
)
