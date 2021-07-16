import React, { useEffect, useState } from 'react';

const API = "http://localhost:3005";
const localUser = localStorage.getItem('userName');

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
