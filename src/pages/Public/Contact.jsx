import { useState } from "react";
import { submitInquiry } from "../../services/inquiryService";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus({ type: "loading", message: "Sending..." });
        try {
            await submitInquiry(form);
            setStatus({ type: "success", message: "Inquiry sent successfully. We'll get back to you soon!" });
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
        } catch {
            setStatus({ type: "error", message: "Failed to submit inquiry. Please try again or call us directly." });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Info */}
                <div>
                    <h1 className="text-5xl font-bold text-[var(--text-heading)] mb-6">Let's Build Together</h1>
                    <p className="text-xl text-[var(--text-light)] mb-12 leading-relaxed">
                        Have a project in mind? We're here to help you turn your vision into reality. 
                        Reach out to our team of experts today.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                                <Phone size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-heading)] mb-1">Call Us</h3>
                                <p className="text-lg text-[var(--text-light)]">+250 123 456 789</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-heading)] mb-1">Email Us</h3>
                                <p className="text-lg text-[var(--text-light)]">info@spidconstruction.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-[var(--primary)] shrink-0">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[var(--text-heading)] mb-1">Visit Us</h3>
                                <p className="text-lg text-[var(--text-light)]">Kigali, Rwanda</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {status.message && (
                            <div className={`p-4 rounded-xl text-sm font-medium border ${
                                status.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 
                                status.type === 'error' ? 'bg-red-50 text-red-700 border-red-100' : 
                                'bg-blue-50 text-blue-700 border-blue-100'
                            }`}>
                                {status.message}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                <input
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all"
                                    placeholder="John Doe"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all"
                                    placeholder="john@example.com"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                <input
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all"
                                    placeholder="+254..."
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Service Required</label>
                                <select
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all appearance-none"
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service</option>
                                    <option value="Residential">Residential Construction</option>
                                    <option value="Commercial">Commercial Projects</option>
                                    <option value="Renovation">Renovation & Remodeling</option>
                                    <option value="Other">Other Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Project Details</label>
                            <textarea
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-5 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all"
                                rows="5"
                                placeholder="Tell us more about your project..."
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            className="btn-primary w-full justify-center text-lg py-5 mt-4"
                            type="submit"
                            disabled={status.type === 'loading'}
                        >
                            {status.type === 'loading' ? 'Sending...' : 'Send Inquiry'} <Send size={20} className="ml-2" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}