/// <reference types="@react-three/fiber" />

import type { ThreeElements } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {}
