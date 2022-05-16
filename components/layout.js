import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="container px-8 py-4">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout