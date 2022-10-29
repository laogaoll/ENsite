
import { Header, Footer} from '@/components'
import { Outlet } from 'react-router-dom';

import './index.scss'



const Layout = () => {
    return (
        <>
            <Header />
             <Outlet />
            <Footer />
        </>
    );
}
export default Layout

