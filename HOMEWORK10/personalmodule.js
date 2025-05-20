function getGreeting(username) {
  const now = new Date();
  const currentHour = now.getHours();

  let greeting;

  switch (true) {
    case currentHour >= 5 && currentHour < 12:
      greeting = 'Good morning';
      break;
    case currentHour >= 12 && currentHour < 18:
      greeting = 'Good afternoon';
      break;
    case currentHour >= 18 && currentHour < 22:
      greeting = 'Good evening';
      break;
    default:
      greeting = 'Good night';
  }

  return `Date of request: ${now}\n${greeting}, ${username}`;
}

module.exports = {
  getGreeting,
};
