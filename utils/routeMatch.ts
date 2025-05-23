export function isActiveRoute(currentPath: string, linkPath: string): boolean {
  return currentPath === linkPath
}
