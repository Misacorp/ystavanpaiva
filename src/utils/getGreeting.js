import * as greetings from './greetings';

const getGreeting = name => {
  const normalizedName = name.trim().toLowerCase();

  if (['jasmiina', 'jassu', 'jaz'].includes(normalizedName)) {
    return greetings.jasmiinaGreeting;
  }

  if (
    [
      'jarka',
      'kaisa',
      'nina',
      'daniel',
      'aleksi',
      'anna',
      'atte',
      'emmiina',
      'jeremias',
      'jere',
      'johanna',
      'saara',
    ].includes(normalizedName)
  ) {
    return greetings.donutGreeting;
  }

  if (normalizedName === 'sammakko') {
    return greetings.sammakkoGreeting;
  }

  return greetings.baseGreeting;
};

export default getGreeting;
