const express = require('express')
const app = express()
const port = 3000
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1463911",
  key: "f611494f146123ecd442",
  secret: "d1812341b281abb9cffb",
  cluster: "us2",
  useTLS: true
});


app.get('/', (req, res) => {
  pusher.trigger("my-channel", "my-event", {
    message: "hello world"
  });
  res.send('sent');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})