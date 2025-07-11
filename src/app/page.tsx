import Footer from "./modules/Footer"
import Hero from "./modules/Hero"
import Navbar from "./modules/Navbar"
import QuickPricing from "./modules/QuickPricing"
import Ratings from "./modules/Ratings"
import WhyUs from "./modules/WhyUs"

const Home = () => {
    return (
        <>
          <div className="container-fluid navbar-hero-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <Navbar />
              </div>

              <div className="row mt-5 pb-5-on-sm">
                <Hero />
              </div>
            </div>
          </div>

          <div className="container-fluid whyus-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <WhyUs />
              </div>
            </div>
          </div>

          <div className="container-fluid quickpricing-container">
            <div className="container-lg">
              <div className="row justify-content-center">
                <QuickPricing />
              </div>
            </div>
          </div>

          <div className="container-fluid ratings-container">
            <div className="container-lg" id="opinie">
              <div className="row justify-content-center">
                <Ratings />
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
