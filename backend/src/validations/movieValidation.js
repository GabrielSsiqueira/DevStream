const { z } = require('zod')

const movieSchema = z.object({

    title: z.string().min(2),

    description: z.string(),

    videoUrl: z.string().url(),

    coverImage: z.string().url(),

    categoryId: z.string()
})

module.exports = { movieSchema }