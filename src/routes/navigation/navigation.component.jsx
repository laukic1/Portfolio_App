import { Outlet } from 'react-router-dom';
import SideBar from '../../components/side-bar-navigation/side-bar-navigation.component';

const Navigation = () => {
    return (
        <>
        <SideBar />
            <Outlet />
            </>
    )
}

export default Navigation;