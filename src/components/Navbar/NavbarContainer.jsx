import Navbar from "./Navbar";

const NavbarContainer = (props) => {
    const state = props.store.getState();

    return (<Navbar friends={state.navbar.friends}/>);
};

export default NavbarContainer;