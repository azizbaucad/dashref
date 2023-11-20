import { forms, routes } from '@theme';
import { signIn } from 'next-auth/react';

const {
  errors: {
    auth: { login },
    //highlight
  },
} = forms.messages;

/**
 * Login form handler
 *
 * @param {Object} data
 * @param {Function} setSubmitting
 * @param {Function} setFieldError
 * @param {route} redirectOnSuccess
 * @returns
 */
export const loginFormHandler = async ({
  data,
  setSubmitting,
  setFieldError,
  redirectOnSuccess = '/',
}) => {
  const { identifier, password } = data;

  try {
    const res = await signIn('kcl-credential', {
      username: identifier,
      password,
      callbackUrl: `${window.location.origin}${routes.pages.auth.login}`,
      redirect: false,
    });
    if (!res || res.error) {
      setSubmitting(false);
      setFieldError('authentication', login.not_authorized);
      return;
    }
    window.location.assign(redirectOnSuccess);
  } catch (error) {
    console.log(error);
    setSubmitting(false);
  }
};

export const highlightFormHandler = async ({ data }) => {
  const { status } = data;
  console.log(status);
};
