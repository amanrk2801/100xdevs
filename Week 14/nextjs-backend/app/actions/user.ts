// "user server" => don't want to specify because by default every component in next js is server component.
"use server"
import client from "@/db";

export async function signup(username:string, password:string){
  try {
    const user = await client.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    console.log("Signed Up:" +user.id);
    return true

  } catch (error) {
    console.log(error);
    return false
  }
}
