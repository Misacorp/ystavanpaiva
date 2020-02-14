import * as greetings from './greetings';

const getGreeting = name => {
  const normalizedName = name.trim().toLowerCase();

  if (['jasmiina', 'jassu', 'jaz'].includes(normalizedName)) {
    return greetings.jasmiinaGreeting;
  }

  if (normalizedName === 'kaisa') {
    return greetings.kaisaGreeting;
  }

  if (normalizedName === 'niko') {
    return greetings.nikoGreeting;
  }

  if (normalizedName === 'heikki') {
    return greetings.heikkiGreeting;
  }

  if (normalizedName === 'jarka') {
    return greetings.jarkaGreeting;
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

  if (
    [
      'aikku',
      'aino-inkeri',
      'ilona',
      'anna-ilona',
      'dave',
      'david',
      'eero',
      'eerika',
      'emma',
      'hanna',
      'joonas',
      'kirsi',
      'konstantin',
      'kosu',
      'maija',
      'meri',
      'mc',
      'mia-carita',
      'milka',
      'onni',
      'julia',
    ].includes(normalizedName)
  ) {
    return greetings.karvaGreeting;
  }

  if (normalizedName === 'sammakko') {
    return greetings.sammakkoGreeting;
  }

  return greetings.baseGreeting;
};

export default getGreeting;
