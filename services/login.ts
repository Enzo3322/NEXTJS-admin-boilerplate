export const fetchLogin = async ({
    username,
    password,
}: {
    username: string;
    password: string;
}) => {
    const res = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
            "Content-type": "application/json",
        },
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error();
    }

    return res;
};