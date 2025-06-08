import Hero from "./modules/Hero"
import Navbar from "./modules/Navbar"
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
        </>
    )
}

export default Home
