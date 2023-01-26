import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background = () => {
  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -10,
          position: 'absolute',
        },
        background: {
          color: {
            value: '#11073A',
          },
        },
        fpsLimit: 60,

        particles: {
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.008,
              opacity: 1,
              color: {
                value: '#fff',
              },
            },
          },
          number: {
            value: 100,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'star',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: '',
              width: 5,
              height: 65,
            },
          },
          opacity: {
            value: 0.7,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
          },

          move: {
            direction: 'right',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
        },

        detectRetina: true,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
          },
        },
      }}
    />
  );
};

export default Background;
