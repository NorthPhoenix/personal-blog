import type { ISourceOptions } from "@tsparticles/engine"

const particlesOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "transparent",
    },
    opacity: 1,
  },
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  delay: 0,
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
  },
  particles: {
    bounce: {
      horizontal: {
        value: 1,
      },
      vertical: {
        value: 1,
      },
    },
    color: {
      value: "#fff",
    },
    move: {
      angle: {
        offset: 0,
        value: 0,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "left",
      drift: 0,
      enable: true,
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: true,
      speed: { min: 0, max: 0.4 },
      straight: true,
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: {
        mode: "wait",
        value: 0,
      },
      value: 900,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.25,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    reduceDuplicates: false,
    shape: {
      close: true,
      fill: true,
      options: {
        star: {
          nb_sides: 8,
        },
      },
      type: "star",
    },
    size: {
      value: {
        min: 0,
        max: 2,
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
    rotate: {
      random: {
        enable: true,
        minimumValue: 0,
      },
      value: 360,
      animation: {
        enable: true,
        speed: { min: 0, max: 10 },
        decay: 0,
        sync: false,
      },
      direction: "",
      path: false,
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          value: 3,
        },
        rate: {
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },
    twinkle: {
      particles: {
        enable: true,
        color: {
          value: "#fff",
        },
        frequency: 0.001,
        opacity: 1,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: false,
  zLayers: 100,
} satisfies ISourceOptions

export default particlesOptions
