const Researcher = require("../models/researcher")
const bcrypt = require("bcrypt")

module.exports.signup = async (req, res, next) => {
  try {
    // generate hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // create new user in DB

    const newresearcher = new Researcher({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
      gender: req.body.gender,
    })

    //save user and return response...

    const researcher = await newresearcher.save()
    res.status(200).json(researcher)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports.login = async (req, res) => {
  try {
    const researcher = await Researcher.findOne({ email: req.body.email })

    !researcher && res.status(404).json({msg : "User not found!!!"})

    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      researcher.password
    )

    !validPassword &&
      res.status(404).json({ msg: "Wrong password try again!!!!" })

    res.status(200).json(researcher)
  } catch (error) {
    res.status(500).json(error)
  }
}