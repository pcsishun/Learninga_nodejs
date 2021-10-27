import express from 'express';


// Node.js modules, __dirname and __filename don't exist. //
import { fileURLToPath } from 'url';
import { dirname } from 'path';

 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname );

// set ค่าของเวลาเป็น mili sec // 

// setInterval(()=>{
//     console.log('hello world')
// }, 1000) 

// arrow function // 

const john = 'john';
const peter = 'peter';

const sayHello = (name) =>{
    console.log(`Hello there ${name}`)
}

sayHello('Earth');
sayHello(john);
sayHello(peter);

// modules import // 
import  exportNames from './shareModule.js'
// ดูว่า modules มีอะไรบ้าง 
console.log(exportNames);

// เรียกใช้ element ด้านใน modules 
console.log(exportNames.EarthName);
console.log(exportNames.EarthName_last);

const theElementModule = exportNames.EarthName_last; 
sayHello(theElementModule);


// mind grenade //
import addValues from './mindGrenade.js';
addValues();

// Os Module  //
import os from 'os';

// onfo abour current user
const user = os.userInfo();
console.log(user);
 
// method return the system uptime in second (ระยะการทำงานของเวลาทั้งหมด)
console.log(`The System UPtime is ${os.uptime()} seconds`)

const currnetOS = {
    name:os.type(), // บอก os 
    release:os.release(), // บอก version 
    totalMem: os.totalmem(), // บอก Ram ทั้งหมด 
    freeMem: os.freemem() // บอก Ram ที่เหลือ 
}

console.log(currnetOS);

// Path 
import path from 'path';

console.log(path.sep); // บอกว่าเราอยู่ path ไหน

const filePath = path.join('/content/','subfolder','test.txt'); // เป็นการสร้าง folder เเละ move file test.txt ไปไว้ด้านใน path ที่ระบุ 
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt') // ระบุว่าpathนี้อยู่ที่ไหนของ machine
console.log(absolutePath) 


// read file sync // 
import fs, { readdirSync } from 'fs';

const first = fs.readFileSync('./sysncFile/first.txt', 'utf8');
const second = fs.readFileSync('./sysncFile/second.txt', 'utf8');
const readJsonFile = fs.readFileSync('./sysncFile/dataJson.json', 'utf8');

console.log(first, second);
console.log(readJsonFile);


