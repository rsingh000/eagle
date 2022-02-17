import React from "react";
import {Particles} from "react-tsparticles"
import ParticleConfig from "./particle-config"

export default function ParticleBackground() {
    return (
        <Particles 
        id="tsparticles"
        height="2000px"
        style={{ position: 'absolute',zIndex:"0"}}
        options={{
            background: {
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
              },
              fullScreen: {
                enable: false
              },
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "repulse"
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble"
                  }
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 0.3,
                    opacity: 1,
                    size: 4
                  },
                  grab: {
                    distance: 400,
                    links: {
                      opacity: 0.5
                    }
                  }
                }
              },
              particles: {
                links: {
                  color: {
                    value: "#ffffff"
                  },
                  distance: 500,
                  opacity: 0.4,
                  width: 2
                },
                move: {
                  attract: {
                    rotate: {
                      x: 600,
                      y: 1200
                    }
                  },
                  direction: "bottom",
                  enable: true,
                  outModes: {
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out"
                  }
                },
                number: {
                  density: {
                    enable: true
                  },
                  value: 400
                },
                opacity: {
                  random: {
                    enable: true
                  },
                  value: {
                    min: 0.1,
                    max: 0.5
                  },
                  animation: {
                    speed: 1,
                    minimumValue: 0.1
                  }
                },
                size: {
                  random: {
                    enable: true
                  },
                  value: {
                    min: 1,
                    max: 10
                  },
                  animation: {
                    speed: 40,
                    minimumValue: 0.1
                  }
                }
              }
        }}
        
        ></Particles>
    );
}
