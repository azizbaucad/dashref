module.exports = {
  name: 'Theming forms files',
  themeForms: {
    inputs: {
      auth: {
        login: {
          identifier: {
            uid: 'identifier',
            label: 'Identifier',
            placeholder: 'johndoe',
          },
          password: {
            uid: 'password',
            label: 'Password',
            placeholder: '****************',
            password: true,
            secureTextEntry: true,
          },
          submit: {
            uid: 'authentication',
            submit_message: 'Sign in',
          },
        },
      },
      highlight: {
        week: {
          uid: 'week',
          label: 'Week',
          placeholder: 'Numero de la semaine',
        },
        title: {
          uid: 'title',
          label: 'Titre',
          placeholder: 'Titre du fait marquant',
        },
        desc: {
          uid: 'desc',
          label: 'Description',
          placeholder: '',
        },
        status: {
          uid: 'status',
          label: 'Status',
          placeholder: '',
        },
        submit: {
          uid: 'submit',
          submit_message: 'Soumettre',
        },
        cancel: {
          uid: 'cancel',
          submit_message: 'Annuler',
        },
      },
      search: {
        keyword: {
          uid: 'keyword',
          placeholder: 'Recherchez ici',
        },
        submit: {
          uid: 'searchSubmition',
          submit_message: 'Recherchez',
        },
      },
    },
    messages: {
      errors: {
        auth: {
          login: {
            not_authorized: 'Identifier or Password invalid',
          },
        },
        highlight: {
          request_err: 'Error when saving highlight',
        },
      },
      infos: {},
    },
  },
};
