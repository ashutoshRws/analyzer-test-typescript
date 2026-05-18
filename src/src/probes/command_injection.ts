// PROBE-SEC-003
import { exec } from 'child_process';

export function runReport(filename: string): void {
  exec(`cat ${filename}`, () => undefined);
}
