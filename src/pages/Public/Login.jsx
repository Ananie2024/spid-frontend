import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        
        const result = await login(username, password);
        if (result.success) {
            navigate("/admin");
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-[var(--primary)] mx-auto mb-4">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-3xl font-bold text-[var(--text-heading)]">Admin Login</h1>
                    <p className="text-[var(--text-light)] mt-2">Enter your credentials to access the dashboard</p>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Username</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all"
                                placeholder="Admin username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all"
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button className="btn-primary w-full justify-center text-lg py-4 mt-4">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}