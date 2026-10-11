import confetti from "canvas-confetti";

/**
 * Fires a custom romantic chic celebratory confetti explosion
 * with burgundy, wine, dark cherry, and champagne gold colors
 */
export function fireCelebrationConfetti() {
  const colors = ["#5C0617", "#72091F", "#8B0021", "#D4AF37", "#FAF6F2", "#E8D5B5"];

  // Central burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: colors,
    shapes: ["circle"],
    scalar: 1.1,
  });

  // Left shower
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors,
    });
  }, 180);

  // Right shower
  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors,
    });
  }, 360);
}
