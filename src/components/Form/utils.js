export const titleCase = (phrase) => {
  if (typeof phrase !== 'string') return phrase;
  const words = phrase.split(' ');
  const capitalizedWords = words.map(word => capitalize(word));
  return capitalizedWords.join(' ');
}

function capitalize (word) {
  const firstLetter = word[0].toUpperCase();
  const remainder = word.slice(1, word.length);
  return `${firstLetter}${remainder}`;
}
