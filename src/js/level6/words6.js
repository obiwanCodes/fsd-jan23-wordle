import dictionary from './dictionary6';
export const getWord = () => dictionary[Math.floor(Math.random() * dictionary.length)];

export const isInDictionary = (str) => dictionary.includes(str);
