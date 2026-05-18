// PROBE-SEC-002
export function buildUserQuery(userId: string): string {
  return `SELECT * FROM users WHERE id = ${userId}`;
}
