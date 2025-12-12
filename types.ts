import * as THREE from 'three';

export enum AppMode {
  LOADING = 'LOADING',
  TREE = 'TREE',
  SCATTER = 'SCATTER',
  FOCUS = 'FOCUS'
}

export interface ParticleData {
  initialPos: THREE.Vector3;
  treePos: THREE.Vector3;
  scatterPos: THREE.Vector3;
  speed: number;
  color: THREE.Color;
  type: 'box' | 'sphere' | 'cane';
}

export interface PhotoData {
  id: string;
  texture: THREE.Texture;
  position: THREE.Vector3;
  rotation: THREE.Euler;
}

export interface HandData {
  x: number; // -1 to 1
  y: number; // -1 to 1
  isPinching: boolean;
  isOpen: boolean;
  isFist: boolean;
  detected: boolean;
}