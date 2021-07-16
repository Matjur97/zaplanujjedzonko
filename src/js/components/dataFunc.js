import React from 'react';

const API = "http://localhost:3005";

export const getUser = (successCallback) => {
    fetch(`${API}/users/`)
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data)
            }
        })
        .catch(err => console.warn(err));
};

export const createUser = (userName, successCallback) => {
    fetch(`${API}/users/`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(userName)
    })
        .then(r => r.json())
        .then(data => {
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data.data);
            }
        })
        .catch(err => console.warn(err));
};

export const createRecipe = (newRecipe) => {
    fetch(`${API}/recipes`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newRecipe),
    })
    .then(response => response.json())
    .then(newRecipe => {
        console.log(newRecipe)
    })
    .catch(err => {
        console.log(err)
    })
}

export const createSchedule = (newSchedule) => {
    fetch(`${API}/schedules`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newSchedule),
    })
    .then(response => response.json())
    .then(newSchedule => {
        console.log(newSchedule)
    })
    .catch(err => {
        console.log(err)
    })
}

export const putRecipe = (updateRecipe, id) => {
    fetch(`${API}/recipes/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateRecipe),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(updateRecipe => {
        console.log(updateRecipe)
    })
    .catch(err => {console.log(err)})
}

export const putSchedule = (updateSchedule, id) => {
    fetch(`${API}/schedules/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateSchedule),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(updateSchedule => {
        console.log(updateSchedule)
    })
    .catch(err => {console.log(err)})
}