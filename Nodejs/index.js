// let path = require('path');
// console.log(typeof path);

// let myPath = 'C:\\Users\\Adeoy\\Desktop\\Node_js'

// console.log(myPath);
// let parsePath = path.parse(myPath);
// console.log(parsePath);

// let dirname = path.dirname(myPath);
// console.log( 'Directory name : ', dirname);

// let ext = path.extname(myPath);
// console.log(ext);

// let basename = path.basename(myPath);
// console.log(basename);

const os = require('os');
console.log(os);

// let typeOfOs = os.type();
// console.log(typeOfOs);

// let archOfos = os.arch();
// console.log(archOfos);

let hostnameOfOs = os.hostname();
console.log(hostnameOfOs);

let platformOfMyOs = os.platform();
console.log(platformOfMyOs);

let freememOs = os.freemem();
console.log(freememOs);

let cpuOfOs = os.cpus()
console.log(cpuOfOs);

