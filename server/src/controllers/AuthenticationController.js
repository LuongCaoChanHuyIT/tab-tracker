const {User} = require('../models/User')

module.exports = {
  async register (req, res) {
    try {
      // const user = await User.create(req.body)
      res.status(200).send({
        success: 'This email account is already in use'
      })
    } catch (error) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  }
}