$.getScript("/particles.js-master/particles.min.js", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#7defe6",
      },
      shape: {
        type: "circle", //còn các kiểu khác circle, edge, triangle, polygon, star
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
        value: 0.5,
        random: true,
        anim: {
          //Điều chỉnh độ mờ của các hình
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 10,
        random: true,
        anim: {
          //Điểu chỉnh size thu nhỏ dần của các hình
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false, //Cho phép hiển thị đường nối
        distance: 200,
        color: "#7defe6", //màu đường nối
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 8,
        direction: "bottom", //top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
        random: false,
        straight: false,
        out_mode: "out", // mode khác là bounce
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas", //mode khác canvas
      events: {
        onhover: {
          enable: true,
          mode: "bubble", //chỉnh dựa theo modes bên dưới bao gồm grab, bubble, repulse
        },
        onclick: {
          enable: false,
          mode: "repulse",
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
          size: 2,
          duration: 0.3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
