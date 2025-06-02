const particlesOptions = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#0d1117",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "parallax",
      }
    },
    modes: {
      parallax: {
        enable: true,
        force: 60, // how deep it feels
        smooth: 10 // how smooth the transition is
      }
    }
  },
  particles: {
    number: {
      value: 75,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "bounce",
      },
    },
    size: {
      value: 2,
    },
    opacity: {
      value: 0.5,
    }
  }
};

export default particlesOptions;
