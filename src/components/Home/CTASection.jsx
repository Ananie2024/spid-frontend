import { Link } from "react-router-dom";

export default function CTASection() {

    return (

        <section
            className="py-5 text-center text-white"
            style={{
                background: "#1f2937"
            }}
        >

            <div className="container">

                <h2>
                    Ready To Start Your Project?
                </h2>

                <p>
                    Speak with our team today.
                </p>

                <Link
                    className="btn btn-warning"
                    to="/contact"
                >
                    Contact Us
                </Link>

            </div>

        </section>

    );
}