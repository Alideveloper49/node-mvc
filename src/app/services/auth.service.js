const UserRepository = require('../repositories/user.repository')
const HttpResponse = require('../helpers/http-response')
const bcrypt = require('bcryptjs')
const JwtHelper = require('../helpers/jwt-helper')
const validate = require('../helpers/validate')
const mailService = require('./mail.service')

class AuthService {
  async auth(email, password) {
    const isValid = validate.validateEmail(email);

    if (!isValid) return HttpResponse.forbiden(null, 'Invalid email address')

    const user = await UserRepository.findOne({ email }).select('+password')

    if (!user) return HttpResponse.forbiden(user, 'User not found')

    const passwordCorrect = await bcrypt.compare(password, user.password)
    user.password = undefined

    if (!passwordCorrect) return HttpResponse.forbiden(null, 'Invalid password')

    const token = JwtHelper.generateToken(user.id)

    return HttpResponse.success({ user, token })
  }

  async register(first_name, last_name, phone, email, password) {

    const isValid = validate.validateEmail(email);

    if (!isValid) return HttpResponse.badRequest(null, 'Invalid email address')

    const checkExists = await UserRepository.findOne({ email })

    if (checkExists) return HttpResponse.forbiden(null, 'User already exists')

    const user = await UserRepository.create({ first_name, last_name, phone, email, password })
    user.password = undefined

    const token = JwtHelper.generateToken(user.id);
    
    await mailService.send(email);

    return HttpResponse.success({ user, token })
  }
}

module.exports = new AuthService()
