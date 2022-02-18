import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            const state = store.getState();

            const addMessage = () => {
                const action = addMessageActionCreator();
                store.dispatch(action);
            };

            const updateNewMessageText = (text) => {
                const action = updateNewMessageTextActionCreator(text);
                store.dispatch(action)
            };

            return <Dialogs
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newMessageText={state.dialogsPage.newMessageText}
                updateNewMessageText={updateNewMessageText}
                addMessage={addMessage}
            />
        }}
    </StoreContext.Consumer>

};

export default DialogsContainer;