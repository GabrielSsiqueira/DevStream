const { z } = require('zod')

const registerSchema = z.object({

    name: z.string().min(3, 'Name deve ter no minimo 3 caracteres'),

    email: z.string().email('email invalido'),

    password: z.string().min(6, 'password deve ter no minimo 6 caracteres')
})

module.exports = { registerSchema }