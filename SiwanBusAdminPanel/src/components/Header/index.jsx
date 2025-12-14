import { React, Link } from "react";
import Logo from '../../assets/images/SiwanBusLogo.png'

const Header = () => {
    return (
        <>
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-3">
                        {/**Logo Wrapper */}
                        <Link to="/dashboard" ></Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;