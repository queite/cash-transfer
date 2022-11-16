import { z } from 'zod';

const passordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*/;

const LoginZodSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
    invalid_type_error: 'Username must be a string',
  }).min(3, { message: 'Username must be 3 or more characters long' }),

  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }).min(8, { message: 'Password must be 8 or more characters long' })
    .refine((val) => passordRegex.test(val), {
      message: 'Password must have at least one capital letter and one number',
    }),
});

type ILogin = z.infer<typeof LoginZodSchema>;

// interface IUser extends ILogin {
//   id: number
//   accountId: number
// }

interface IUserData {
  id: number
  username: string
  accountId: number
}

export { LoginZodSchema, ILogin, IUserData };
