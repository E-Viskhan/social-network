import { act, create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";
import { Provider } from "react-redux";
import reduxStore from "../../../redux/redux-store";

describe("ProfileStatus component", () => {
    test("input should be displayed in editMode instead of span", () => {
        const component = create(
            <Provider store={reduxStore}>
                <ProfileStatus/>
            </Provider>
        );
        const root = component.root;
        const span = root.findByType("span");
        act(() => {
            span.props.onClick();
        })
        const input = root.findByType("input");
        expect(input).toBeDefined();
    });
});