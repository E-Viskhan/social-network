import {addMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
};

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageText, addMessage})(Dialogs);

export default DialogsContainer;