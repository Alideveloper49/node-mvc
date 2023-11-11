const AuthService = require('../services/auth.service')
const HttpResponse = require('../helpers/http-response')

class AuthController {
  async auth(req, res) {
    try {
      const { email, password } = req.body
      const response = await AuthService.auth(email, password)
      res.status(response.status).json(response)
    } catch (error) {
      const response = HttpResponse.serverError(error, 'Error on authenticate new user')
      res.status(response.status).json(response)
    }
  }

  async register(req, res) {
    // try {
      const { first_name, last_name, phone, email, password } = req.body
      const response = await AuthService.register(first_name, last_name, phone, email, password)
      res.status(response.status).json(response)
    // } catch (error) {
    //   const response = HttpResponse.serverError(error, 'Error on register new user')
    //   res.status(response.status).json(response)
    // }
  }
}

module.exports = new AuthController()
