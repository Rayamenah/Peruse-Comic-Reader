import { Suspense } from "react";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Loading from "./Loading/Loading.js";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
