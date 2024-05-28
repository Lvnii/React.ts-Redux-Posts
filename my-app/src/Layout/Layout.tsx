import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Router from "../Router";

const Layout = () => {
    
    return (
        <div className="layout-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">
                <Router />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;