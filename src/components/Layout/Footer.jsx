export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer
            className="text-white py-4 mt-5"
            style={{
                backgroundColor: "#1f2937"
            }}
        >

            <div className="container text-center">

                <h5>
                    SPID Construction
                </h5>

                <p>
                    Building Rwanda's Future
                </p>

                <small>
                    © {year} SPID Construction.
                    All rights reserved.
                </small>

            </div>

        </footer>
    );
}