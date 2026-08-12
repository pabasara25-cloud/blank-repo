import os from 'os';
import { bytesToSize } from './FreeMemeory.mjs';

console.log('System Information:');
console.log(`Operation System: ${os.type()} (${os.platform()} ${os.release()})`);
console.log(`Free Memory: ${bytesToSize(os.freemem())}`);
console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);