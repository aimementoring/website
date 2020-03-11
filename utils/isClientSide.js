// this lives in a separate file because it is imported by several other utility functions
export default function isClientSide() { return typeof window !== 'undefined'; }
