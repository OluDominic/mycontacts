// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Contact = (state: any, {type, payload}: any) => {
  switch (type) {
    case 'GET_CONTACTS':
      return state;
    default:
      return state;
  }
};

export default Contact;
