import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalContext, AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"

export const ApplicationViews = (props) => {
  return (
    <>
      {/* Location */}
      <LocationProvider>
        <EmployeeProvider>
          <AnimalProvider>
            <Route exact path="/" render={(props) => <LocationList {...props} />} />

            <Route
              path="/locations/:locationId(\d+)"
              render={(props) => <LocationDetail {...props} />}
            />
          </AnimalProvider>
        </EmployeeProvider>
      </LocationProvider>

      {/* Animal */}
      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route path="/animals" render={(props) => <AnimalList {...props} />} />

            <Route path="/animals/create" render={(props) => <AnimalForm {...props} />} />
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      {/* Employee */}
      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route path="/employees" render={(props) => <EmployeeList {...props} />} />

            <Route exact path="/employees/create" render={(props) => <EmployeeForm {...props} />} />

            <Route
              path="/employees/:employeeId(\d+)"
              render={(props) => <EmployeeDetail {...props} />}
            />
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      {/* Customer */}
      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
    </>
  )
}
console.log(localStorage)
