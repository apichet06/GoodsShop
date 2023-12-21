// action.tsx
'use server'
import { api } from "@/app/config";
import axios from "axios";
import { cookies } from 'next/headers'
interface Credentials {
    username: string;
    password: string;
}

export async function Login(credentials: Credentials) {
    const { username, password } = credentials;
    console.log(username, password);

    try {
        const result = await axios.post(api + '/users/login', {
            u_email: username,
            u_password: password
        });

        if (result.status === 200) {
            cookies().set('token', result.data.token)
            return result.status;
        }

    } catch (error: any) {
        console.error(error.response?.data?.error);
        return error.response?.data?.error

    }
}

