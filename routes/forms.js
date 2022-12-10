const router = require("express").Router()
const Form = require("../models/forms")

router.post("/create", async (req, res) => {
  try {
    const newForm = new Form(req.body)
    // console.log(req.body.question);
    const form = await newForm.save()
    res.status(200).json(form)
  } catch (err) {
    res.status(500).json({ err: err })
  }
})

router.get("/all-forms", async (req, res) => {
  try {
    var result = await Form.find()
    res.status(200).send(result)
  } catch (e) {
    res.send(e)
  }
})

router.get("/:form", async (req, res) => {
  try {
    const formId = req.params.form
    const form = await Form.findById(formId)
    res.status(200).json(form)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get("/form/:user", async (req, res) => {
  try {
    const user = req.params.user
    const form = await Form.find({ createdBy: user })
    res.status(200).json(form)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
