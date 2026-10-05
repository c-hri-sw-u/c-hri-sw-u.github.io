// What the Playground page shows: small things made to try an idea, newest first. Each is a card: one moving image or
// still, a line on what it is, and a "More" that opens in place with a few sentences and a second image.
// Media live in public/media/playground and are built by scripts/make-detail-media.sh.

export interface Media { src: string; alt: string }
export interface Experiment {
  id: string;
  name: string;
  icon?: string;          // a small app icon beside the name
  meta: string;           // year · what it is
  line: string;           // what it is, in one sentence
  media: Media;           // shown on the card
  more: string[];         // opened in place
  moreMedia?: Media;
  credit: string;         // role and team
  links?: { href: string; label: string }[];
}

const m = (name: string) => `/media/playground/${name}`;

export const experiments: Experiment[] = [
  {
    id: 'rotfix',
    name: 'RotFix',
    icon: m('rotfix-icon.webp'),
    meta: '2025 · Chrome extension',
    line: 'When I only skim ChatGPT’s answers, it stops me until I write down what I understood.',
    media: { src: m('rotfix-lock.mp4'), alt: 'ChatGPT dimmed behind a box asking for a reflection, typed in before the chat unlocks' },
    more: [
      'That summer, at an HCI lab, I learned electronics from ChatGPT, and noticed its long answers slipping past me without a trace.',
      'RotFix counts the turns of a chat. At the limit it locks the box until you write a reflection. An LLM grades it pass, thoughtful or fail, and a thoughtful one comes back with a follow-up question.',
    ],
    moreMedia: { src: m('rotfix-chat.mp4'), alt: 'Asking ChatGPT what a transistor is, with a counter of the rounds left' },
    credit: 'Design and development, solo',
  },
  {
    id: 'walk-with-shooting-star',
    name: 'A Walk with Shooting Star',
    meta: '2025 · VR game',
    line: 'A walk with Nik’s golden retriever, kept in VR: he remembers what you tell him, and lives through your seasons.',
    media: { src: m('shooting-star.webp'), alt: 'A golden retriever on a meadow at sunset, saying it is great to hear from you' },
    more: [
      'Shooting Star was Nik’s puppy, and we made the game in his memory. You can walk with him, talk to him and play fetch. His day and his seasons follow the real world, and an LLM persona remembers your moods and stories.',
      'Later that summer I built a backend to test which parts of the game state to give the model, so the conversation feels true to the place you are in.',
    ],
    moreMedia: { src: m('shooting-star-fetch.webp'), alt: 'The dog with a tennis ball, saying fetch makes its tail wag with joy' },
    credit: 'Design and development, with Nik Kim',
    links: [{ href: 'https://c-hri-sw-u.github.io/llm_mockup/', label: 'LLM mockup' }],
  },
  {
    id: 'boba-bubble-trouble',
    name: 'Boba Bubble Trouble',
    meta: '2025 · Global Game Jam, 48 hours',
    line: 'You are a boba pearl, squishing your way out of a cup of milk tea before someone chews you.',
    media: { src: m('boba.webp'), alt: 'A see-through boba pearl with eyes, among sugar cubes' },
    more: [
      'A 3D platformer where pearls race each other out of the cup, through fruit and ice, with squishy, jelly-like controls. Five of us made it in Unity in 48 hours.',
      'I worked on the concept, 3D models, levels, sound, development and testing.',
    ],
    moreMedia: { src: m('boba-fruit.webp'), alt: 'The pearl jumping across slices of lemon, lime and banana' },
    credit: 'With Franklin Xu, Nik Kim, Regina Xia and Yiran Zhang',
    links: [{ href: 'https://globalgamejam.org/games/2025/boba-bubble-trouble-2', label: 'Game page' }],
  },
];
