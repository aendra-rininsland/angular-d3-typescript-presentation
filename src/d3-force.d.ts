// declare module 'd3-force/src/center' {
//   export default function (x: any, y: any): () => void;
//
// }
// declare module 'd3-force/src/constant' {
//   export default function (x: any): () => any;
//
// }
// declare module 'd3-force/src/jiggle' {
//   export default function (): number;
//
// }
// declare module 'd3-force/src/collide' {
//   export default function (radius: any): () => void;
//
// }
// declare module 'd3-force/src/link' {
//   export default function (links: any): (alpha: any) => void;
//
// }
// declare module 'd3-force/src/simulation' {
//   export function x(d: any): any;
//   export function y(d: any): any;
//   export default function (nodes: any): {
//       tick: () => void;
//       restart: () => any;
//       stop: () => any;
//       nodes: (_: any) => any;
//       alpha: (_: any) => any;
//       alphaMin: (_: any) => any;
//       alphaDecay: (_: any) => any;
//       alphaTarget: (_: any) => any;
//       drag: (_: any) => any;
//       force: (name: any, _: any) => any;
//       fix: (node: any, x: any, y: any) => any;
//       unfix: (node: any) => any;
//       find: (x: any, y: any, radius: any) => any;
//       on: (name: any, _: any) => any;
//   };
//
// }
// declare module 'd3-force/src/manyBody' {
//   export default function (): (_: any) => void;
//
// }
// declare module 'd3-force/src/x' {
//   export default function (x: any): (alpha: any) => void;
//
// }
// declare module 'd3-force/src/y' {
//   export default function (y: any): (alpha: any) => void;
//
// }
// declare module 'd3-force' {
//   export const version: string;
//   export { default as forceCenter } from 'd3-force/src/center';
//   export { default as forceCollide } from 'd3-force/src/collide';
//   export { default as forceLink } from 'd3-force/src/link';
//   export { default as forceManyBody } from 'd3-force/src/manyBody';
//   export { default as forceSimulation } from 'd3-force/src/simulation';
//   export { default as forceX } from 'd3-force/src/x';
//   export { default as forceY } from 'd3-force/src/y';
// }

declare module 'd3-force' {
  export var force: any;
}
