const net = require('net');
const readline = require('readline');
const client = new net.Socket();

client.connect(3000, '127.0.0.1', ()=>{
    console.log('Socket conectado correctamente.');
});

client.on('data', (data)=>{
    //console.log('Info: ' + data); //Concatenacion
    console.log(`Server: ${data}`); //Interpolacion
});

client.on('close', ()=>{
    console.log('Se ha cerrado la conexión.');
});


//hacer chat
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    client.write(line);
});

rl.prompt();
