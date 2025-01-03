import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
      <main className="container pl-12">
        <Outlet/>
      </main>
    );
    
  }
  
  export default RootLayout;
  