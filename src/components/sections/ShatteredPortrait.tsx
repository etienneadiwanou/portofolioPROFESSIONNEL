import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

// Grille asymétrique : lignes et colonnes de tailles inégales (en %)
const ROWS = [18, 34, 16, 32];   // hauteurs cumulées => 4 bandes
const COLS = [14, 36, 22, 28];   // largeurs cumulées => 4 colonnes

function cumulative(sizes: number[]) {
  let acc = 0;
  return sizes.map((s) => {
    const start = acc;
    acc += s;
    return { start, size: s };
  });
}

function buildPieces() {
  const rows = cumulative(ROWS);
  const cols = cumulative(COLS);
  const pieces: {
    left: number; top: number; width: number; height: number;
    x: number; y: number; rotate: number; delay: number;
  }[] = [];

  rows.forEach((r, ri) => {
    cols.forEach((c, ci) => {
      const centerX = c.start + c.size / 2;
      const centerY = r.start + r.size / 2;
      const dx = centerX - 50; // distance au centre horizontalement
      const dy = centerY - 50; // distance au centre verticalement
      const scale = 2.4;       // à quel point ça "explose" loin
      pieces.push({
        left: c.start,
        top: r.start,
        width: c.size,
        height: r.size,
        x: dx * scale,
        y: dy * scale,
        rotate: (dx + dy) * 0.5,
        delay: (Math.abs(ri - 1.5) + Math.abs(ci - 1.5)) * 0.05,
      });
    });
  });
  return pieces;
}

function ShatteredPortrait() {
  const pieces = useMemo(buildPieces, []);
  const [playKey, setPlayKey] = useState(0);

  return (
    <div
      onClick={() => setPlayKey((k) => k + 1)}
      className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer select-none"
      title="Cliquer pour rejouer l'animation"
    >
      {pieces.map((p, i) => (
        <motion.div
          key={`${playKey}-${i}`}
          className="absolute overflow-hidden"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.width}%`,
            height: `${p.height}%`,
          }}
          initial={{ x: p.x, y: p.y, rotate: p.rotate, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 4,
            delay: 0.1 + p.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Image dimensionnée à la taille totale du conteneur, décalée pour ne montrer que ce fragment */}
          <img
            src="/images/etienne.webp"
            alt="Menouwesso Etienne Adiwanou"
            className="absolute"
            style={{
              width: `${(100 / p.width) * 100}%`,
              height: `${(100 / p.height) * 100}%`,
              left: `${-(p.left / p.width) * 100}%`,
              top: `${-(p.top / p.height) * 100}%`,
              objectFit: 'cover',
               maxWidth: 'none',
    maxHeight: 'none',
            }}
          />
        </motion.div>
      ))}

      {/* Voile doré qui s'efface une fois l'image reformée */}
      <motion.div
        key={`veil-${playKey}`}
        className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2.3, delay: 1.5 }}
      />
    </div>
  );
}

export default ShatteredPortrait;