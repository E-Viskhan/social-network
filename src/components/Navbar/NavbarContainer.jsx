import Navbar from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = state => ({ navbar: state.navbar });

export default connect(mapStateToProps)(Navbar);