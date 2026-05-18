// PROBE-SEC-004
export function unsafeHtml(name: string): string {
  return `<h1>Welcome ${name}</h1>`;
}
