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
    fetch(`${API}/users/${localUser}`, {
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

export const createRecipe = (recipeName, description, instruction, ingredients, successCallback) => {
    fetch(`${API}/users/`)
}