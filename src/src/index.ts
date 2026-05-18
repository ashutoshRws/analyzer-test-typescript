import { greet } from './utils';
import { createUser } from './models/user';

function main(): void {
  const user = createUser('tester');
  console.log(greet(user.name));
}

main();
