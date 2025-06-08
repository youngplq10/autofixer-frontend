import Hero from "./modules/Hero"
import Navbar from "./modules/Navbar"

const Home = () => {
    return (
        <div className="container-fluid navbar-hero-container">
          <div className="container-lg">
            <div className="row justify-content-center">
              <Navbar />
            </div>

            <div className="row mt-5">
              <Hero />
            </div>
          </div>
        </div>
    )
}

export default Home
