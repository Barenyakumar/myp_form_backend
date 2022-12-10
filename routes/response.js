const router = require("express").Router()
const Response = require("../models/response")

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


router.get("/:response", async (req, res) => {
  try {
    const responseId = req.params.response
    const response = await Response.findById(responseId)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json(err)
  }
})



module.exports = router;