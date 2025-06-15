import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen}  />
      <div className={`flex-1 transition-all duration-300 ml-16 
        ${isSidebarOpen ? "md:ml-64" : "ml-16"}`}>
        <Navbar isOpen={isSidebarOpen}toggleSidebar={toggleSidebar} />
        <main className="my-16 p-3 pb-0 max-h-[calc(100vh-140px)] overflow-y-auto">{children}</main>
       <Footer/>
      </div>
    </div>
  );
};

export default Layout;
