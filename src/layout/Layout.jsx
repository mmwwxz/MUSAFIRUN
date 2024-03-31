import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderView from "./header/Header.view.jsx";

const Layout = () => {

    const location = useLocation()

    return (
        <>
            <Outlet/>
            <HeaderView />
        </>
    );
};

export default Layout;
