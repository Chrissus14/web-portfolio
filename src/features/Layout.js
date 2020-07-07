import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div className="max-w-screen-lg mx-auto px-2 font-sans">
    <Navbar />
    {children}
  </div>
);

export default Layout;
