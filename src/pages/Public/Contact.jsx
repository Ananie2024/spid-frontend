import { useState } from "react";
import { submitInquiry } from "../../services/inquiryService";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = e => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {

        e.preventDefault();

        try {

            await submitInquiry(form);

            alert("Inquiry sent successfully.");

            setForm({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            });

        } catch {

            alert("Failed to submit inquiry.");
        }
    };

    return (
        <div className="container py-5">

            <h1>Contact Us</h1>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    placeholder="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    placeholder="Requested Service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-3"
                    rows="6"
                    placeholder="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                />

                <button
                    className="btn btn-warning"
                    type="submit"
                >
                    Send Inquiry
                </button>

            </form>

        </div>
    );
}