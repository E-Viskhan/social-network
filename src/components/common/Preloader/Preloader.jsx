import preloader from "../../../assets/images/preloader.gif";

const Preloader = props => <img src={preloader} alt='preloader' style={{"display": "block", "margin": "0 auto"}} {...props}/>;

export default Preloader;