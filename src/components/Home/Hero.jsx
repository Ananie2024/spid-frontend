import { Link } from "react-router-dom";
import logo from "../../assets/branding/logo.png";

export default function Hero() {
    return (
        <section className="bg-dark text-white py-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <img
                            src={logo}
                            alt="SPID Construction"
                            style={{
                                width: "140px",
                                marginBottom: "20px"
                            }}
                        />

                        <h1 className="display-4 fw-bold">
                            Building Rwanda's Future
                        </h1>

                        <p className="lead">
                            Professional construction, engineering,
                            infrastructure and project management services.
                        </p>

                        <div className="mt-4">
                            <Link
                                className="btn btn-warning me-3"
                                to="/projects"
                            >
                                View Projects
                            </Link>

                            <Link
                                className="btn btn-outline-light"
                                to="/contact"
                            >
                                Request Quote
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img
                            src="/construction-hero.jpg"
                            className="img-fluid rounded"
                            alt="Construction"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}