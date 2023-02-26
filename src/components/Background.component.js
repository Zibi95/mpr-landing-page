import ParticlesBg from 'particles-bg';

const Background = () => {
  let config = {
    num: [10, 20],
    rps: 2,
    radius: [2, 4],
    life: [0, 10],
    v: [-1, 1],
    tha: [2, 10],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: 'all', // all or center or {x:1,y:1,width:100,height:100}
    color: ['#fff'],
    cross: 'cross', // cross or bround
    random: 1, // or null,
    // g: 5, // gravity
    f: [1, 0], // force
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 1, particle.radius * 1);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };

  return (
    <div className="overflow-hidden">
      <ParticlesBg
        bg={{
          position: 'absolute',
          zIndex: -10,
        }}
        type="custom"
        config={config}
      />
    </div>
  );
};

export default Background;
