import {useParams} from 'react-router-dom';

export const withRouter = (Component) =>{
    let RouterComponent = (props) => {
        debugger;
        const params = useParams();
        return <Component {...props} params={params}/>;
    }
    return RouterComponent;
}