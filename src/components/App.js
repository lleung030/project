import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
// import {RequireAuth} from "./RequireAuth";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              {/* <PrivateRoute exact path="/" component={Dashboard} element={<Dashboard />}/> */}
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} element={<UpdateProfile />}/> */}
              <Route exact path="/" component={Dashboard} element={<PrivateRoute> <Dashboard /> </PrivateRoute> }/> 

              <Route path="/update-profile" component={UpdateProfile} element={<PrivateRoute> <UpdateProfile /> </PrivateRoute>} />
          
              <Route path="/signup" 
              component={Signup} 
              element={<Signup />}
              />
              <Route path="/login" 
              component={Login}
              element={<Login />} 
              />
              <Route path="/forgot-password" 
              component={ForgotPassword}
              element={<ForgotPassword />} 
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App