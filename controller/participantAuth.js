const Participant = require("../models/participant")
const bcrypt = require("bcrypt")

module.exports.signup = async (req, res, next) => {
  try {
    // generate hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create new user in DB

    const newparticipant = new Participant({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
      gender: req.body.gender,
    })

    //save user and return response...

    const participant = await newparticipant.save()
    res.status(200).json(participant)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports.login = async (req, res) => {
  try {
    const participant = await Participant.findOne({ email: req.body.email })

    !participant && res.status(404).json({ msg: "User not found!!!" })

    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      participant.password
    )

    !validPassword &&
      res.status(404).json({ msg: "Wrong password try again!!!!" })

    res.status(200).json(participant)
  } catch (error) {
    res.status(500).json(error)
  }
}
