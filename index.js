// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!

require('dotenv').config(); 

const server = require('./server'); 

let port = process.env.PORT; 


server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});