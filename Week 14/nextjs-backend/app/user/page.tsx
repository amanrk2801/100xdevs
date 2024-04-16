// this is a server component
import client from "@/db";

async function fetchData() {
    const user = await client.user.findFirst();

    return {
        username: user?.username,
        name: "aman kumbhalwar"
    }
}

export default async function User() {
    const data = await fetchData();

    return (
        <div>
            Name: {data.name}
            <br/>
            Email: {data.username}
        </div>
    )
}