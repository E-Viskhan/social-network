import {useParams} from 'react-router-dom';

export const withRouter = (Component) => {
    return (props) => {
        let params = useParams();
        return <Component {...props} params={params}/>;
    }
}