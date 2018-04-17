import React from "react"


const fetchLogIn = ((username, password) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/login", {
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
        },
        method: "POST"
    })
})

export {
    fetchLogIn
}