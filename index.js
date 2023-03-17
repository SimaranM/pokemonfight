const express = require("express");
const cors = require("cors");

const pokeRouter = require('./routes/pokeRouter');

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use('/', pokeRouter)
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const express = require("express");
// const cors = require("cors");
// const data = require('./data.json');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());

// app.get('/pokemon', (req, res) => {
//   res.send(data)
// })

// app.get('/pokemon/:id', (req, res) => {
//   let { id } = req.params
//   const pokemon = data.find(e => e.id === parseInt(id))
//   res.send(pokemon)
// })

// app.get('/pokemon/:id/:info', (req, res) => {
//   let { id, info } = req.params
//   const pokemon = data.find(e => e.id === parseInt(id))
//   if (info === 'base') {
//     res.send(pokemon.base)
//   }
//   else if (info === 'type') {
//     res.send(pokemon.type)
//   }
//   else if (info === 'name') {
//     res.send(pokemon.name)
//   }
//   else {
//     res.send(pokemon)
//   }
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
