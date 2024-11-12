const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

// "emri_cookies",  "value cookies"

app.get('/', (req,res) => {
    const name = req.cookies.username;
    if(name) {
        res.send(`
            <style>
            h1{color: red};
            </style>
            <h1> Miresevini prape, ${name} ! </h1>`)
        
    } else {
        res.send(`<h1> Pershendetje visitor </h1>
            <script> 
                const userName = prompt("A mund te shkruani emrin?");
                document.cookie = "username=" + userName;
                alert("Pershendetje," + userName + "Ne t'i kemi ruajtur te dhenat ne cookies!");
                window.location.reload();
                </script>
            `);
    }
})

const server = app.listen(3000, () => {
    const host = 'localhost';
    const port = server.address().port;
    console.log(`Server is running at http://${host}:${port}`);
});