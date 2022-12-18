const router = require("express").Router();
const Form = require("../models/forms")

router.get("/:form", async (req, res) => {
  try {
    const formId = req.params.form
    const form = await Form.findById(formId)
    res.status(200).json(form)
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;