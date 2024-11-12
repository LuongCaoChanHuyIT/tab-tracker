const Joi = require('joi')

module.exports = {
  register(req, res, next){
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}')
      )
    }
    const {error, value} = Joi.valid(req.body, schema)
    if(error){
      switch(error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: 'you must provide a valid email address'
          }) 
          break
        case 'password': 
          res.status(400).send({
            error: `
              the password provide failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numberic
              <br>
              2. It must be least 8 characters in lenght and not greater than 32 characters in lenght
            `
          }) 
          break
        default: 
          res.status(400).send({
            error:'Invalid registration information'
          })
      }
    }else{
      next()
    }
 
  }
}