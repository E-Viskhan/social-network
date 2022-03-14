import s from './Login.module.css';

const TextError = props => <span className={s.error}>{props.children}</span>;

export default TextError;