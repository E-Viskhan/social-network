import Navbar from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    };
};

const NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;