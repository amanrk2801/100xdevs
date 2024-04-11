// axios vs fetch
const axios = require("axios");

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos").then(async response=>{
//         // const text = await response.text();
//         const json = await response.json();
//         console.log(json.todos.length);
//     })
// }

// Fetch - GET
// async function main(){
//     const response = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await response.json();
//     console.log(json.todos.length);
// }

// axios - GET
// async function main(){
//     const response = await axios.get("https://sum-server.100xdevs.com/todos")
//     console.log(response.data.todos.length);
// }

// Fetch - POST
// async function main(){
//     const response = await fetch("https://httpdump.app/dumps/9aaa1395-8531-46d5-afed-60ba10ee2a4c",{
//         method: "POST",
//         body:{
//             username: "aman",
//             password: "12345",
//         },
//         headers:{
//             "Authorization" : "Bearer xyzabc123"
//         }
//     })
//     const textData = await response.text();
//     console.log(textData);
// }

// axios - POST
// 1. change request method
// 2. send body
// 3. send headers

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/9aaa1395-8531-46d5-afed-60ba10ee2a4c",{
        username: "aman",
        password: "12345",
    },{
        headers: {
            "Authorization": "Bearer xyzabc123"
        }
    })
    console.log(response.data);
}

main();