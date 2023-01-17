import { Suspense } from "react";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Spinner from "./Spinner/Spinner.jsx";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Header />
      <Suspense fallback={<Spinner />}>{children}</Suspense>
      <Footer />
    </>
  );
};

export default Layout;
