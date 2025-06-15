import About from "@/app/modules/About"
import Footer from "@/app/modules/Footer"
import Navbar from "@/app/modules/Navbar"

const Home = () => {
    return (
        <>
          <div className="container-fluid navbar-hero-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <Navbar />
              </div>

              <div className="row mt-5 pb-5-on-sm">
                <About />
              </div>
            </div>
          </div>

          <div className="container-fluid footer-container py-3">
            <div className="row text-end mx-4 py-3">
              <Footer />
            </div>
          </div>
        </>
    )
}

export default Home
