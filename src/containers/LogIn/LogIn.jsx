import React from "react";
import useLogIn from "../../hooks/useLogIn";
import {
    useDispatch,
    useSelector,
} from "react-redux";
import actionTypes from "../../actions/actionTypes";
import "./LogIn.style.css";

const LogIn = () => {
    const {
        setEmail,
        setPassword,
        login,
        email,
        password,
    } = useLogIn();
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state);
    const onChangeHandler = onChange => event => {
        onChange(event.target.value);
    };

    const onClickHandler = async () => {

        try {
            dispatch({
                type: actionTypes.SIGN_IN,
            });
            const response = await login();
            dispatch({
                type: actionTypes.SIGN_IN_SUCCESS,
                payload: response,
            });
        } catch (error) {
            dispatch({
                type: actionTypes.SIGN_IN_FAILURE,
                payload: error.message,
            });
        }
    };


    return (
        <div className="Login">
            <h1>Log In</h1>
            <div className="Login-content">
                <div className="Login-form">
                    <div className="Login-form--fields">
                        <input type="email" placeholder="Email" onChange={onChangeHandler(setEmail)} value={email} />
                        <input type="password" placeholder="Password" onChange={onChangeHandler(setPassword)} value={password} />
                    </div>
                    <div className="Login-form--actions">
                        <button type="button" disabled={loading} onClick={onClickHandler}>{loading ? "loading..." : "Login"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;