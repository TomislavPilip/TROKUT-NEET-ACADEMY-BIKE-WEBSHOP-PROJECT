import "./About.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import HistoryImage from "../../assets/About/service.webp";
import JourneyImage from "../../assets/About/journeyimage.avif";
import OurBicyclesImage from "../../assets/About/bicycleshop.jpg";
import CyclingGoal from "../../assets/About/cyclinggoal.jpg";
import FutureImage from "../../assets/About/futurecronobike.webp";

export function About() {
  return (
    <>
      <div className="about-container">
        <div class="about-section">
          <div class="inside-container">
            <h1>About us</h1>
            <p>
              Bike Shop is more than just a store - it's a passion for cycling.
              We were founded with a vision of providing high-quality bicycles
              and gear for cycling enthusiasts. Our journey begins with a love
              for two wheels.
            </p>
          </div>
        </div>

        <div class="about-us">
          <div class="container">
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>History</AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className="accordion-content">
                    <div>
                      <p>
                        Bike Shop emerged a decade ago as a humble bicycle
                        repair workshop. Since then, our journey has been one of
                        remarkable evolution, transforming us from a modest
                        establishment into a celebrated hub for cyclists across
                        the region. Our hallmark lies in our unwavering
                        commitment to excellence and an abiding love for
                        cycling, distinguishing us from others in our field.
                        Through tireless effort and an unwavering devotion to
                        our craft, we've not only earned the trust of cyclists
                        but have also emerged as a cherished haven for the
                        cycling fraternity.
                      </p>
                    </div>

                    <div>
                      <img src={HistoryImage} alt="" />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Journey</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="accordion-content">
                    <div>
                      <img src={JourneyImage} alt="" />
                    </div>
                    <div>
                      <p>
                        Embark on a voyage with us, where every pedal stroke
                        resonates with the thrill of adventure. Our story isn't
                        just about selling bikes; it's about nurturing a
                        community bound by the love of cycling. From the first
                        click on our website to the exhilarating ride along
                        scenic routes, our journey together transcends mere
                        transactions. It's about empowering you to chase
                        sunsets, conquer mountains, and discover the untamed
                        beauty of the world on two wheels. Join us as we
                        navigate the twists and turns of this incredible
                        journey, fueled by the wind in our hair and the spirit
                        of exploration in our hearts. Welcome aboard!
                      </p>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Bicycles</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="accordion-content">
                    <div>
                      <p>
                        At Tome Bike Shop , we're passionate about providing
                        high-quality bicycles for all types of riders. Whether
                        you're a casual commuter, an avid cyclist, or someone
                        looking to explore the great outdoors, we have the
                        perfect bike for you.
                      </p>
                      <p>
                        Our range includes everything from sleek road bikes
                        built for speed, to sturdy mountain bikes designed to
                        tackle rugged terrain, to comfortable city bikes ideal
                        for urban commuting. We also offer a variety of
                        accessories and gear to enhance your cycling experience.
                      </p>
                      <p>
                        Each bicycle in our collection is carefully crafted
                        using the latest technology and premium materials. Our
                        team of experts is dedicated to ensuring that every bike
                        meets our rigorous standards for performance,
                        durability, and comfort.
                      </p>
                    </div>
                    <div>
                      <img src={OurBicyclesImage} alt="" />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Goal</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="accordion-content">
                    <div>
                      <img src={CyclingGoal} alt="" />
                    </div>
                    <div>
                      <p>
                        At Tome Bike Shop Bicycles, our mission is to promote a
                        healthier, more sustainable lifestyle through cycling.
                        We believe that bicycles offer a multitude of benefits,
                        not only for individuals but also for communities and
                        the environment.
                      </p>
                      <p>
                        Our primary goal is to provide accessible and affordable
                        bicycles to people of all ages and backgrounds. We aim
                        to make cycling a viable transportation option for daily
                        commutes, as well as a source of enjoyment and
                        recreation for leisure activities.
                      </p>
                      <p>
                        Additionally, we are committed to promoting cycling
                        safety and awareness. We actively support initiatives
                        that advocate for bike-friendly infrastructure, promote
                        responsible riding practices, and educate cyclists about
                        road safety.
                      </p>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Future</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="accordion-content">
                    <div>
                      <p>
                        We are excited about the future of cycling and our role
                        in shaping it. We envision a world where bicycles are
                        not only a popular mode of transportation and
                        recreation, but also a catalyst for positive change in
                        society.
                      </p>
                      <p>
                        Looking ahead, we are committed to continually
                        innovating and expanding our product offerings. We will
                        invest in research and development to create
                        cutting-edge bicycles that are both technologically
                        advanced and environmentally friendly.
                      </p>
                      <p>
                        Additionally, we will strive to foster a vibrant cycling
                        community by organizing events, supporting local
                        initiatives, and collaborating with like-minded
                        organizations. Together, we can inspire more people to
                        embrace the joy of cycling and contribute to a
                        healthier, happier future for generations to come.
                      </p>
                    </div>
                    <div>
                      <img src={FutureImage} alt="" />
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
