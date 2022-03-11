import {useParams} from 'react-router-dom';
import {isEmptyObj} from "../assets/helpers";

export const withRouter = (Component) => {
    return (props) => {
        let params = useParams();
        params = isEmptyObj(params) ? { userId: 22656 } : params;
        return <Component {...props} params={params}/>;
    }
}