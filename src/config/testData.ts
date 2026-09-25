import 'dotenv/config';

export const testConfig = {
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
  standardUser: process.env.STANDARD_USER || 'standard_user',
  standardPassword: process.env.STANDARD_PASSWORD || 'secret_sauce',
  lockedUser: process.env.LOCKED_USER || 'locked_out_user',
  invalidPassword: process.env.INVALID_PASSWORD || 'wrong_password',
};
