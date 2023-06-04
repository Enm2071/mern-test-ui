import React from "react";
import httpClient from "../api/http.client";

const useLogin = () => {
    const [loading, setLoading] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const login = async () => {
        try {
            setLoading(true);
            const response = await httpClient.post("/auth/sign-in", {
                email,
                password,
            });
            const { data } = response;
            return data;
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login, setEmail, email, setPassword, password, error };
};

export default useLogin;