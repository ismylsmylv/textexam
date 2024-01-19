const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const ProdSchema = mongoose.model("textexamdb", new mongoose.Schema({
  name: String,
  price: String
}))
app.use(bodyParser.json())
app.get('/', async (req, res) => {
  const datas = await ProdSchema.find({})
  res.send(datas)
})

app.post('/', async (req, res) => {
  const postedData = new ProdSchema({
    name: req.body.name
  })
  await postedData.save()
  res.send({ message: "saved" })
})

app.delete("/:id", async (req, res) => {
  const id = req.params.id
  const deletedData = await ProdSchema.findByIdAndDelete(id)
  res.send({ message: "deleted" })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect("mongodb+srv://ismayil:ismayil@cluster0.4m3eqpc.mongodb.net/textexamdb?retryWrites=true&w=majority").then(console.log("connected"))