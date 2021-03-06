import React, { useEffect, useState } from 'react';
import '../../scss/style.scss';
import { getUser, createUser } from './dataFunc';

const LogoutPage = () => {
    const [name, setName] = useState("podaj swoje imię");
    const [userWarn, setUserWarn] = useState("");
    const [warnIcon, setWarnIcon] = useState("disabled");
    const [users, setUsers] = useState(null);
    const [usersArr, setUsersArr] = useState([])

    const handleOnClick = (e) => {
        if (e.target.value !== "podaj swoje imię") {
            return
        }
        setName("")
    };

    useEffect(() => {
        fetch(`http://localhost:3005/users`)
            .then(response => response.json())
            .then(users => {
                setUsers(users.results)
            })
            .catch((err) => console.warn(err))
    })

    const userMap = () => {
        users.name.map(el => {
            setUsersArr(prev => {
                return {
                    ...prev,
                    el
                }
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "podaj swoje imię") {
            setUserWarn("Podaj swoje imię"),
                setWarnIcon("")
        }
        else if (name.length < 3) {
            setUserWarn("Imię musi mieć minimum 3 znaki"),
                setWarnIcon("")
        }
        else {
            setUserWarn("")
            setWarnIcon("disabled")
            const userName = {
                name: name
            };

            createUser(userName, (data) => {
                console.log(data)
            });
            localStorage.setItem('userName', name);
            window.location.reload();
            console.log(localStorage.getItem('userName'))
        }

    }

    return (
        <section className="application">
            <div className="logout-page">
                <div className="container-logout">
                    <div className="content">
                        <h1>
                            Witaj,
                        </h1>
                        <h2>Wygląda na to, że jesteś tutaj po raz pierwszy!</h2>
                        <form onSubmit={handleSubmit}>
                            <input onClick={handleOnClick} onChange={e => setName(e.target.value)} name="name" type="text" value={name}></input>
                            <input type="submit" value="Gotowe!" />
                        </form>
                        <h3>Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację ;)</h3>
                        <div className="warn">
                            <span className={warnIcon}>
                                <i class="fas fa-exclamation-triangle"></i>
                            </span>
                            <span>
                                {userWarn}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default LogoutPage;