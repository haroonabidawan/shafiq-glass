interface VectorMapOptions {
  map: string;
  selector?: string;
  backgroundColor?: string;
  // Add other properties as needed
}

declare module 'jsvectormap' {
  export function createVectorMap(map: VectorMapOptions): void;
}
