import { useState } from "react";

export default function Login() {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const submit = e => {

        e.preventDefault();

        console.log({
            username,
            password
        });
    };

    return (
        <div className="container py-5">

            <h1 className="mb-4">
                Admin Login
            </h1>

            <form
                onSubmit={submit}
                style={{
                    maxWidth: "500px"
                }}
            >

                <input
                    className="form-control mb-3"
                    placeholder="Username"
                    value={username}
                    onChange={e =>
                        setUsername(
                            e.target.value
                        )
                    }
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={e =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <button
                    className="btn btn-warning"
                >
                    Login
                </button>

            </form>

        </div>
    );
}