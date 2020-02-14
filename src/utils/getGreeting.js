import * as greetings from './greetings';

const getGreeting = name => {
  switch (name.toLowerCase()) {
    case 'jasmiina': {
      return greetings.jasmiinaGreeting;
    }
    default:
      return greetings.baseGreeting;
  }
};

export default getGreeting;
