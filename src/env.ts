import z from 'zod'

//Garantindo que o env possui as chaves necessarias
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
