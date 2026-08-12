import os from 'os';

export function getFreeMemory() {
    return os.freemem();
}