import { Route, Routes } from "react-router"
import Dashboard from "./components/Dashboard/Dashboard"
import Orders from "./components/Dashboard/Orders"
import Customers from "./components/Dashboard/Customers"
import Products from "./components/Dashboard/Products"
import Purchases from "./components/Dashboard/Purchases"
import Vendors from "./components/Dashboard/Vendors"
import Categories from "./components/Dashboard/Categories"
import Attributes from "./components/Dashboard/Attributes"
import Role from "./components/Dashboard/Role"
import Login from "./components/Login/Login"
import Register from "./components/Login/Register"
import TitleUpdater from "./components/TitleUpdater"

function App() {


  return (
    <>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Orders />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="categories" element={<Categories />} />
          <Route path="attributes" element={<Attributes />} />
          <Route path="role" element={<Role />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
