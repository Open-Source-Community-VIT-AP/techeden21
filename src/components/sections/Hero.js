import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import Timeline from "../timtline/event_time_line";
import Sponsors from "../sponsors/sponsors";
import devfolio from "./devfolio.svg";
import "./button.css";
const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "<https://apply.devfolio.co/v2/sdk.js>";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-32 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">2022 TechEden </span>
              Coming Soon!
            </h1>
            <div className="container-xs">
              <h1
                className="mt-64 mb-32 reveal-from-bottom"
                data-reveal-delay="200"
              >
                Hack + <span className="text-color-primary">Code</span>
              </h1>
              {/* <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                2022 TechEden Coming Soon!
              </p> */}
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  {/* <a className = "buttondiv" target = "_blank" href = "https://techeden.devfolio.co/">
                <img src = {devfolio}/> 
                <h5>Apply with Devfolio</h5>
              </a> */}
                  {/* <Button

                <ButtonGroup>
                  {/* <div
                    class="apply-button"
                    data-hackathon-slug="slug"
                    data-button-theme="light"
                    style="height: 44px; width: 312px"
                  ></div> */}
                  {/*<Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://techeden.devfolio.co/"
                    target="_blank"
                  >
                    Apply with Devfolio
                  </Button>*/}
                  <Button
                    tag="a"
                    color="light"
                    wideMobile
                    href="http://discord.link/TechEden"
                    target="_blank"
                  >
                    Join Our Discord
                  </Button>
                  {/* <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href = "https://www.codingninjas.com/events/code-a-thon-vit-ap-university"
                    target="_blank"
                  >
                    Register for Codeathon
                  </Button> */}
                </ButtonGroup>
              </div>
            </div>
          </div>
          <hr />
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}

          <Timeline />
        </div>
      </div>
      <Sponsors />
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
