import os from 'os';
import {getFreeMemory } from './FreeMemory.mjs';

// Function to convert bytes to human-readable format
function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    console.log('System Information:');

    console.log(`Operating System: ${os.type()} (${os.platform()} ${os.release()})`);
    
    console.log(`Free Memory: ${bytesToSize(getFreeMemory())}`);
    
    console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);
    
