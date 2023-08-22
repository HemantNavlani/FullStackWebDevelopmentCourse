const os = require('os')



// console.log("CPU architecture",os.arch())
// console.log("Free memeory"+os.freemem())
// console.log("Total Memory" +os.totalmem())
// console.log("Network Interfaces"+JSON.stringify(os.networkInterfaces()))
// console.log("OS default temp dir:",os.tmpdir())

console.log("Endianess:"+os.endianness())
console.log("Hostname:"+os.hostname())
console.log("OS type:"+os.type())
console.log("OS Platform:"+os.platform())
console.log("OS Release:"+os.release())