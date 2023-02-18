import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

type Props = {
  isDarkMode: boolean;
};

const BackgroundParticles = (props: Props) => {
  const darkParticle = "#F7F7F8";
  const lightParticle = "#151515";
  
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: props.isDarkMode ? "#151515" : "#F7F7F8",
          },
          opacity: 0,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
            // onHover: {
            //   enable: true,
            //   mode: "connect",
            // },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            connect: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: props.isDarkMode ? darkParticle : lightParticle,
          },
          links: {
            value: props.isDarkMode ? darkParticle : lightParticle,
            distance: 150,
            enable: false,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            // directions: "bounce",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
