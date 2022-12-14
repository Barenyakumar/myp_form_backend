const router = require("express").Router()
const Response = require("../models/response")

// get user's response based on researcher's email
router.get("/:formId", async (req, res) => {
  try {
    const responseId = req.params.formId
    const response = await Response.find({ formId: req.params.formId })
    console.log(response)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
})


router.get("/:email", async (req, res) => {
  try {
    const response = await Response.find({ createdBy: req.params.email });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get("/all", async (req, res) => {
  try {
    const responses = await Response.find()
    res.status(200).json(responses)
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
})

router.post("/create", async (req, res) => {
  try {
    const newResponse = new Response(req.body)
    // console.log(req.body.question);
    const response = await newResponse.save()
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ err: err })
  }
})









module.exports = router;