import { greet } from '../src/utils';
import { createUser } from '../src/models/user';

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

assert(greet('world') === 'Hello, world', 'greet works');
assert(createUser('a').name === 'a', 'createUser works');
console.log('ok');
