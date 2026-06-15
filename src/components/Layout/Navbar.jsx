import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="p-4 shadow">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Admin</Link>
            </div>
        </nav>
    );
}