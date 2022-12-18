const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const formRoutes = require("./routes/forms")
const responseRoutes = require("./routes/response")
const formdataRoute = require("./routes/formData")
const researcherAuth = require("./routes/researcher")
const participantAuth = require("./routes/participant")
const {mail} = require("./config/smtp")

mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log("DB connected...")
  },
  (err) => console.log(err)
)

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/api/forms", formRoutes)
app.use("/api/response", responseRoutes)
app.use("/api/form", formdataRoute)
app.use("/api/researcher", researcherAuth)
app.use("/api/participant", participantAuth)
app.use("/api/email",mail )

// // sending mails
// app.post("/email", (req, res) => {
//   try {
//     console.log(req.body)
//     res.status(200).json({ msg: "Email sent successfully" })
//   } catch (err) {
//     console.log(err)
//     res.status(500).json({ msg: err })

//   }
  
  
//   // transporter(options)
// })

app.listen(process.env.PORT || 8800, () =>
  console.log("Server connected to port " + process.env.PORT)
)
