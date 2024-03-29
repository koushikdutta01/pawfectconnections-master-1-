import pup1 from "../assets/img/pup1.png";
import pup2 from "../assets/img/pup2.png";
import pup3 from "../assets/img/pup3.png";
import pup4 from "../assets/img/pup4.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const NearbyPets = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Nearby Pets</h2>
              <p>
                Discover Furry Friends in Your Neighborhood! 🏡🐾 Explore our
                Nearby Pets section to find lovable companions ready to bring
                joy to your doorstep. From playful pups to cuddly cats, connect
                with local pets seeking their forever homes. It's time to make a
                difference in a furball's life—your new best friend could be
                just around the corner! 🌟🐕🏠 #LocalLove #AdoptNearby
                #PawfectNeighbors
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={pup1} alt="Image" />
                  <h5>Adorable Golden Retriever: Sunny 🌞🐾</h5>
                  <p>
                    Meet Sunny, the sunshine of your life! This charming Golden
                    Retriever is 2 years old, with a heart as golden as their
                    fur. Sunny loves fetch, long walks, and is great with kids.
                    With a pure bloodline and a gentle demeanor, Sunny is ready
                    to fill your home with warmth and love. Are you ready for
                    endless tail wags and companionship? Adopt Sunny today!
                  </p>
                </div>
                <div className="item">
                  <img src={pup2} alt="Image" />
                  <h5>Persian Charm: Whiskers the Cat 🐾😺</h5>
                  <p>
                    Whiskers, the epitome of feline grace! This 4-year-old
                    Persian cat is a true delight. With luxurious fur and a
                    regal presence, Whiskers is the perfect companion for cozy
                    evenings and sunny windowsills. This sophisticated feline
                    enjoys quiet moments and playful pounces. If you're seeking
                    a cat with a touch of elegance, Whiskers is the purr-fect
                    choice. Ready to add a dash of Persian charm to your life?
                    Adopt Whiskers now!
                  </p>
                </div>
                <div className="item">
                  <img src={pup3} alt="Image" />
                  <h5>Fearless Rottweiler: Rocky 🦴🐾</h5>
                  <p>
                    Introducing Rocky, the protector with a heart of gold! This
                    3-year-old Rottweiler is not just a handsome hunk but also
                    incredibly loyal. With a strong build and a playful spirit,
                    Rocky is the perfect blend of strength and charm. Whether
                    you're a seasoned pet owner or a first-timer, Rocky is eager
                    to become your steadfast companion. Ready for a bold
                    adventure? Adopt Rocky now!
                  </p>
                </div>
                <div className="item">
                  <img src={pup4} alt="Image" />
                  <h5>Lovable Labrador: Luna 🌙🐾</h5>
                  <p>
                    Luna, the Lab with a heart full of love! At 1.5 years old,
                    Luna is an energetic bundle of joy. This Labrador is not
                    only stunning but also incredibly intelligent. Luna enjoys
                    outdoor activities, cuddle sessions, and is known for being
                    a quick learner. With a pedigree that speaks for itself,
                    Luna is the perfect addition to an active and loving home.
                    Ready for laughter and love? Adopt Luna today!
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
