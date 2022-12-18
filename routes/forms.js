const router = require("express").Router()
const Form = require("../models/forms")

//create new form

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


//

router.get("/all-forms", async (req, res) => {
  try {
    var result = await Form.find()
    res.status(200).send(result)
  } catch (e) {
    res.send(e)
  }
})
router.get("/:email", async (req, res) => {
  try {
    const user = req.params.email
    const form = await Form.find({ createdBy: user })
    res.status(200).json(form)
  } catch (err) {
    res.status(500).json(err)
  }
})





module.exports = router
