import "./hero.css";
import { Icon } from "@iconify/react";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We give best intro to the world of Cycling</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          velit? Quis adipisci voluptates, iure incidunt eos qui quidem dolorum
          amet quam quas labore nisi a quaerat pariatur alias, consectetur rem.
        </p>
        <button className="explore-btn">
          <span>Explore More</span>
          <span>
            <Icon
              icon="icomoon-free:arrow-right"
              width="1.5em"
              height="1.5em"
              style={{ color: "black" }}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
