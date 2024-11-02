import initKaplay from "./kaplayCtx";

export default function initGame() {
  const k = initKaplay();
  k.loadSprite("background", "./experiment/background.png");
  k.loadSprite("characters", "./experiment/characters.png", {
    sliceY: 2,
    sliceX: 8,
    anims: {
      "down-idle": 0,
      "up-idle": 1,
      "right-idle": 2,
      "left-idle": 3,
      right: { from: 4, to: 5, loop: true },
      left: { from: 6, to: 7, loop: true },
      down: { from: 8, to: 9, loop: true },
      up: { from: 10, to: 11, loop: true },
      "npc-down": 12,
      "npc-up": 13,
      "npc-right": 14,
      "npc-left": 15,
    },
  });

  k.add([k.sprite("background"), k.pos(0, -70), k.scale(8)]);

  const player = k.add(k.sprite);
}