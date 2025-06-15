import Footer from "@/app/modules/Footer"
import Navbar from "@/app/modules/Navbar"
import QuickPricing from "@/app/modules/QuickPricing"

const Home = () => {
    return (
        <>
          <div className="container-fluid navbar-hero-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <Navbar />
              </div>
            </div>

            <div className="container-lg">
              <div className="row justify-content-center">
                <QuickPricing />
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
