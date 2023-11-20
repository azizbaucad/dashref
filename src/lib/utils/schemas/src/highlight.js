import { object, string } from 'yup';

export const highlight = object({
  status: string().trim().required(),
  desc: string().trim().required(),
  title: string().trim(),
  submit: string().trim(),
  cancel: string().trim(),
});
