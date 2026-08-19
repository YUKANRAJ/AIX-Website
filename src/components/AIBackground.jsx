import { useEffect, useRef } from "react";

const COLORS = {
  blue: [62, 139, 255],
  cyan: [103, 220, 255],
  gold: [201, 162, 39],
  white: [235, 242, 255],
};

function rgba(color, alpha) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
}

function distance(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export default function AIBackground({
  variant = "hero",
  className = "",
}) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let animationId;
    let running = true;

    let nodes = [];
    let particles = [];
    let circuits = [];

    let mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const isHero = variant === "hero";

    function createNode(x, y, options = {}) {
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        radius: options.radius || Math.random() * 1.8 + 0.8,
        color: options.color || COLORS.blue,
        alpha: options.alpha || 0.55,
        core: options.core || false,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function createScene() {
      nodes = [];
      particles = [];
      circuits = [];

      const mobile = window.innerWidth < 768;

      /*
       * Main computational core
       */
      if (isHero) {
        const coreX = width * 0.72;
        const coreY = height * 0.49;

        const outerRadius = Math.min(width, height) * 0.29;

        /*
         * Structured neural clusters
         */
        const clusterCount = mobile ? 4 : 7;

        for (let cluster = 0; cluster < clusterCount; cluster++) {
          const angle =
            (Math.PI * 2 * cluster) / clusterCount +
            Math.random() * 0.25;

          const clusterDistance = outerRadius * (0.42 + Math.random() * 0.42);

          const clusterX =
            coreX + Math.cos(angle) * clusterDistance;

          const clusterY =
            coreY + Math.sin(angle) * clusterDistance;

          const clusterNodes = mobile ? 5 : 8;

          for (let i = 0; i < clusterNodes; i++) {
            const localAngle = (Math.PI * 2 * i) / clusterNodes;

            const radius = 20 + Math.random() * 55;

            nodes.push(
              createNode(
                clusterX + Math.cos(localAngle) * radius,
                clusterY + Math.sin(localAngle) * radius,
                {
                  radius: Math.random() * 1.7 + 0.8,
                  color:
                    Math.random() > 0.82
                      ? COLORS.cyan
                      : COLORS.blue,
                  alpha: 0.42,
                }
              )
            );
          }
        }

        /*
         * Inner computational nodes
         */
        const innerNodes = mobile ? 12 : 22;

        for (let i = 0; i < innerNodes; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 55 + Math.random() * 100;

          nodes.push(
            createNode(
              coreX + Math.cos(angle) * radius,
              coreY + Math.sin(angle) * radius,
              {
                radius: Math.random() * 1.8 + 1,
                color:
                  Math.random() > 0.88
                    ? COLORS.gold
                    : COLORS.blue,
                alpha: 0.65,
              }
            )
          );
        }

        /*
         * Central nucleus
         */
        

        /*
         * Data particles
         */
        const particleCount = mobile ? 30 : 70;

        for (let i = 0; i < particleCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 80 + Math.random() * outerRadius;

          particles.push({
            angle,
            radius,
            speed: 0.00015 + Math.random() * 0.0003,
            size: Math.random() * 1.4 + 0.4,
            alpha: Math.random() * 0.45 + 0.15,
            color:
              Math.random() > 0.92
                ? COLORS.gold
                : COLORS.cyan,
          });
        }

        /*
         * Circuit traces around the AI system
         */
        const circuitCount = mobile ? 5 : 10;

        for (let i = 0; i < circuitCount; i++) {
          const side = Math.random() > 0.5 ? 1 : -1;

          const startX =
            coreX +
            side * (outerRadius + 50 + Math.random() * 100);

          const startY =
            coreY -
            outerRadius +
            Math.random() * outerRadius * 2;

          const points = [
            [startX, startY],
            [startX + side * 35, startY],
            [startX + side * 35, startY + 30],
            [startX + side * 90, startY + 30],
          ];

          circuits.push({
            points,
            color:
              Math.random() > 0.85
                ? COLORS.gold
                : COLORS.blue,
          });
        }
      }

      /*
       * Ambient background nodes.
       * Very sparse so we don't return to constellation wallpaper.
       */
      const ambientCount = mobile ? 10 : 22;

      for (let i = 0; i < ambientCount; i++) {
        nodes.push(
          createNode(
            Math.random() * width,
            Math.random() * height,
            {
              radius: Math.random() * 1.2 + 0.5,
              color: COLORS.blue,
              alpha: 0.12,
            }
          )
        );
      }
    }

    function resize() {
      const rect = wrapper.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createScene();
    }

    function drawAtmosphere(time) {
      /*
       * Deep black/navy base
       */
      const background = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      background.addColorStop(0, "#02050c");
      background.addColorStop(0.45, "#040914");
      background.addColorStop(1, "#02040a");

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      /*
       * AI core atmospheric glow
       */
      if (isHero) {
        const coreX = width * 0.72;
        const coreY = height * 0.49;

        const pulse =
          0.82 +
          Math.sin(time * 0.00045) * 0.08;

        const glow = ctx.createRadialGradient(
          coreX,
          coreY,
          0,
          coreX,
          coreY,
          Math.min(width, height) * 0.48
        );

        glow.addColorStop(
          0,
          rgba(COLORS.blue, 0.13 * pulse)
        );

        glow.addColorStop(
          0.35,
          rgba(COLORS.blue, 0.055)
        );

        glow.addColorStop(
          0.7,
          rgba(COLORS.blue, 0.015)
        );

        glow.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = glow;

        ctx.fillRect(
          coreX - width * 0.5,
          coreY - height * 0.5,
          width,
          height
        );
      }

      /*
       * Subtle secondary blue light
       */
      const secondary = ctx.createRadialGradient(
        width * 0.12,
        height * 0.18,
        0,
        width * 0.12,
        height * 0.18,
        width * 0.4
      );

      secondary.addColorStop(
        0,
        rgba(COLORS.blue, 0.035)
      );

      secondary.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = secondary;

      ctx.fillRect(0, 0, width, height);
    }

    function drawGrid() {
      /*
       * Extremely subtle technical grid.
       */
      const spacing = window.innerWidth < 768 ? 55 : 75;

      ctx.save();

      ctx.strokeStyle = "rgba(90, 140, 220, 0.025)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.restore();
    }

    function drawCircuits() {
      ctx.save();

      circuits.forEach((circuit) => {
        ctx.beginPath();

        circuit.points.forEach(([x, y], index) => {
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });

        ctx.strokeStyle = rgba(circuit.color, 0.13);
        ctx.lineWidth = 1;

        ctx.stroke();

        const last =
          circuit.points[circuit.points.length - 1];

        ctx.beginPath();
        ctx.arc(last[0], last[1], 2, 0, Math.PI * 2);

        ctx.fillStyle = rgba(circuit.color, 0.28);
        ctx.fill();
      });

      ctx.restore();
    }

    function drawRings(time) {
      if (!isHero) return;

      const coreX = width * 0.72;
      const coreY = height * 0.49;

      const base = Math.min(width, height) * 0.14;

      ctx.save();

      for (let i = 0; i < 4; i++) {
        const radius =
          base +
          i * base * 0.55;

        const rotation =
          time * (0.000025 + i * 0.00001) *
          (i % 2 === 0 ? 1 : -1);

        ctx.beginPath();

        ctx.ellipse(
          coreX,
          coreY,
          radius,
          radius * (0.62 + i * 0.05),
          rotation,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          i === 0
            ? rgba(COLORS.cyan, 0.22)
            : rgba(COLORS.blue, 0.09);

        ctx.lineWidth = i === 0 ? 1.2 : 0.7;

        ctx.stroke();
      }

      ctx.restore();
    }

    function drawConnections() {
      if (!isHero) return;

      ctx.save();

      /*
       * Structured connections only.
       * We intentionally don't connect every random node.
       */
      const coreX = width * 0.72;
      const coreY = height * 0.49;

      const coreNodes = nodes.filter(
        (node) =>
          distance(node, {
            x: coreX,
            y: coreY,
          }) < Math.min(width, height) * 0.25
      );

      for (let i = 0; i < coreNodes.length; i++) {
        const node = coreNodes[i];

        for (let j = i + 1; j < coreNodes.length; j++) {
          const other = coreNodes[j];

          const dist = distance(node, other);

          if (dist < 105) {
            const alpha =
              (1 - dist / 105) * 0.16;

            ctx.strokeStyle = rgba(
              COLORS.blue,
              alpha
            );

            ctx.lineWidth = 0.7;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        /*
         * Connect selected nodes toward nucleus.
         */
        if (
          distance(node, {
            x: coreX,
            y: coreY,
          }) < 190 &&
          Math.random() > 0.55
        ) {
          ctx.strokeStyle = rgba(
            COLORS.cyan,
            0.09
          );

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(coreX, coreY);
          ctx.stroke();
        }
      }

      ctx.restore();
    }

    function drawParticles(time) {
      if (!isHero) return;

      const coreX = width * 0.72;
      const coreY = height * 0.49;

      const maxRadius =
        Math.min(width, height) * 0.33;

      ctx.save();

      particles.forEach((particle) => {
        if (!reducedMotion.matches) {
          particle.angle += particle.speed;
        }

        const x =
          coreX +
          Math.cos(particle.angle) *
            particle.radius;

        const y =
          coreY +
          Math.sin(particle.angle) *
            particle.radius *
            0.68;

        if (
          particle.radius > maxRadius
        ) {
          particle.radius = 80;
        }

        const pulse =
          0.65 +
          Math.sin(
            time * 0.002 +
              particle.radius
          ) *
            0.25;

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = rgba(
          particle.color,
          particle.alpha * pulse
        );

        ctx.fill();
      });

      ctx.restore();
    }

    function drawNodes(time) {
      ctx.save();

      nodes.forEach((node) => {
        /*
         * Very subtle movement.
         */
        if (!reducedMotion.matches) {
          node.x += node.vx;
          node.y += node.vy;
        }

        /*
         * Cursor interaction.
         */
        if (
          mouse.active &&
          isHero
        ) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(
            dx * dx + dy * dy
          );

          if (dist < 130) {
            const force =
              (1 - dist / 130) * 0.12;

            node.x += dx * force * 0.01;
            node.y += dy * force * 0.01;
          }
        }

        /*
         * Core node glow.
         */
        // if (node.core) {
        //   const glow = ctx.createRadialGradient(
        //     node.x,
        //     node.y,
        //     0,
        //     node.x,
        //     node.y,
        //     45
        //   );

        //   glow.addColorStop(
        //     0,
        //     rgba(COLORS.white, 0.35)
        //   );

        //   glow.addColorStop(
        //     0.18,
        //     rgba(COLORS.cyan, 0.2)
        //   );

        //   glow.addColorStop(
        //     1,
        //     rgba(COLORS.blue, 0)
        //   );

        //   ctx.fillStyle = glow;

        //   ctx.beginPath();

        //   ctx.arc(
        //     node.x,
        //     node.y,
        //     45,
        //     0,
        //     Math.PI * 2
        //   );

        //   ctx.fill();
        // }

        const pulse =
          0.8 +
          Math.sin(
            time * 0.001 +
              node.phase
          ) *
            0.2;

        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = rgba(
          node.color,
          node.alpha * pulse
        );

        ctx.fill();
      });

      ctx.restore();
    }

    function animate(time) {
      if (!running) return;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      drawAtmosphere(time);
      drawGrid();
      drawCircuits();
      drawRings(time);
      drawConnections();
      drawParticles(time);
      drawNodes(time);

      if (!reducedMotion.matches) {
        animationId =
          requestAnimationFrame(animate);
      }
    }

    function handleResize() {
      resize();

      if (reducedMotion.matches) {
        animate(0);
      }
    }

    function handleMouseMove(event) {
      if (!isHero || window.innerWidth < 768) {
        return;
      }

      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    resize();

    if (reducedMotion.matches) {
      animate(0);
    } else {
      animationId =
        requestAnimationFrame(animate);
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    const motionHandler = () => {
      if (!reducedMotion.matches) {
        cancelAnimationFrame(animationId);
        animationId =
          requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
        animate(0);
      }
    };

    reducedMotion.addEventListener?.(
      "change",
      motionHandler
    );

    return () => {
      running = false;

      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      reducedMotion.removeEventListener?.(
        "change",
        motionHandler
      );
    };
  }, [variant]);

  return (
    <div
      ref={wrapperRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
    </div>
  );
}