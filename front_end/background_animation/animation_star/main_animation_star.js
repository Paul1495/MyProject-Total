$.getScript("/particles.js-master/particles.min.js", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#7defe6",
      },
      shape: {
        type: "circle", //còn các kiểu khác edge, triangle, polygon, star
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false, //Cho phép hiển thị đường nối
        distance: 150,
        color: "#7defe6", //màu đường nối
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out", // mode khác là bounce
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas", //mode khác canvas
      events: {
        onhover: {
          enable: true,
          mode: "repulse", //chỉnh dựa theo modes bên dưới bao gồm grab, bubble, repulse
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        // push: {
        //   particles_nb: 4,
        // },
        // remove: {
        //   particles_nb: 2,
        // },
      },
    },
    retina_detect: true,
  });
});
