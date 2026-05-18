// PROBE-SEC-007
export function runPlugin(code: string): unknown {
  return eval(code);
}
