import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import useTopScroll from "../hooks/useScrollTop";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {

    const {scroller} = useTopScroll()
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

    {scroller && <ScrollToTop/>}
    </div>
  );
};

export default Layout;
