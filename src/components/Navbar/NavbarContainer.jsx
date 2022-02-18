import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            const state = store.getState();

            return <Navbar friends={state.navbar.friends}/>
        }}
    </StoreContext.Consumer>
};

export default NavbarContainer;