// Initialize particle animation using particlesJS library
particlesJS("particle-container", {
  // Configure particle settings
  particles: {
    // Number of particles
    number: {
      value: 80, // Total number of particles
      density: {
        enable: true,
        value_area: 800, // Density of particles
      },
    },
    // Particle color
    color: {
      value: "#ffffff", // White color for particles
    },
    // Particle shape
    shape: {
      type: "circle", // Shape of particles (circle, edge, triangle, polygon, star, image)
      stroke: {
        width: 0, // Stroke width
        color: "#000000", // Stroke color
      },
      polygon: {
        nb_sides: 5, // Number of sides for polygon shape
      },
      image: {
        src: "img/github.svg", // Image source for particles
        width: 100, // Image width
        height: 100, // Image height
      },
    },
    // Particle opacity
    opacity: {
      value: 0.5, // Opacity value
      random: false, // Randomize opacity
      anim: {
        enable: false, // Enable opacity animation
        speed: 1, // Animation speed
        opacity_min: 0.1, // Minimum opacity
        sync: false, // Sync animation
      },
    },
    // Particle size
    size: {
      value: 3, // Particle size
      random: true, // Randomize particle size
      anim: {
        enable: false, // Enable size animation
        speed: 40, // Animation speed
        size_min: 0.1, // Minimum size
        sync: false, // Sync animation
      },
    },
    // Particle lines
    line_linked: {
      enable: true, // Enable lines between particles
      distance: 150, // Distance between particles
      color: "#ffffff", // Line color
      opacity: 0.4, // Line opacity
      width: 1, // Line width
    },
    // Particle movement
    move: {
      enable: true, // Enable particle movement
      speed: 6, // Movement speed
      direction: "none", // Movement direction (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
      random: false, // Randomize movement direction
      straight: false, // Straight movement
      out_mode: "out", // Movement mode (out, bounce)
      bounce: false, // Bounce particles
      attract: {
        enable: false, // Enable particle attraction
        rotateX: 600, // Rotation X-axis
        rotateY: 1200, // Rotation Y-axis
      },
    },
  },
  // Interaction settings
  interactivity: {
    detect_on: "canvas", // Detection area (canvas, window)
    events: {
      // Mouse hover event
      onhover: {
        enable: true, // Enable hover interaction
        mode: "repulse", // Interaction mode (grab, bubble, repulse)
      },
      // Mouse click event
      onclick: {
        enable: true, // Enable click interaction
        mode: "push", // Interaction mode (grab, bubble, repulse, push, remove)
      },
      resize: true, // Resize event
    },
    // Interaction modes
    modes: {
      grab: {
        distance: 400, // Grab distance
        line_linked: {
          opacity: 1, // Line opacity
        },
      },
      bubble: {
        distance: 400, // Bubble distance
        size: 40, // Bubble size
        duration: 2, // Bubble duration
        opacity: 8, // Bubble opacity
        speed: 3, // Bubble speed
      },
      repulse: {
        distance: 200, // Repulse distance
        duration: 0.4, // Repulse duration
      },
      push: {
        particles_nb: 4, // Number of particles to push
      },
      remove: {
        particles_nb: 2, // Number of particles to remove
      },
    },
  },
  retina_detect: true, // Retina display detection
});
