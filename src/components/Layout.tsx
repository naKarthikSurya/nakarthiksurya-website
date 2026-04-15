import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const InteractiveScene3D = React.lazy(() => import("./InteractiveScene3D"));

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Suspense fallback={null}>
        <InteractiveScene3D />
      </Suspense>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-1 pt-16 md:pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;