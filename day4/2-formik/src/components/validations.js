import * as yup from 'yup';

const max = 50;
const min = 2;

const messages = {
  required: 'Bu alan zorundur.',
  min: `Minimum ${min} karakter girilmelidir.`,
  max: `Maximum ${max} karakter girilmelidir.`,
  email: 'Geçerli bir email girin.',
};

const schema = yup.object().shape({
  name: yup.string().required(messages.required).min(min, messages.min).max(max, messages.max),
  surname: yup.string().required(messages.required).min(min, messages.min).max(max, messages.max),
  email: yup.string().email(messages.email).required(messages.required),
  // password: yup.string().min(6).max(100).required(messages.required),
  password: yup
    .string()
    .required(messages.required)
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    ),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default schema;
