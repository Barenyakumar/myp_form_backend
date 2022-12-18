const Form = require("../models/forms")

module.exports.getEmailForm = async (req, res, next) => {
  try {
    const user = req.params.email
    const form = await Form.find({ createdBy: user })
    res.status(200).json(form)
  } catch (err) {
    res.status(500).json(err)
  }
}


module.exports.getForm = async (req, res) => {
  try {
    const formId = req.params.form
    const form = await Form.findById(formId)
    res.status(200).json(form)
  } catch (err) {
    res.status(500).json(err)
  }
}