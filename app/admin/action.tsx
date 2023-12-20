// action.tsx
'use server'

interface Credentials {
    username: string;
    password: string;
}
export async function Login(credentials: Credentials) {
    const { username, password } = credentials;
    console.log(username, password);

    // Add your login logic here using the received username and password
}
