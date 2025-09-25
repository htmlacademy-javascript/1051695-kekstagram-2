const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRRIPTIONS = [
  'description1',
  'description2',
  'description3',
  'description4',
  'description5',
  'description6',
  'description7',
  'description8',
  'description9',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTOS_MAX_NUMBER = 25;
const AVATARS_MAX_NUMBER = 6;
const LIKES_MIN_NUMBER = 15;
const LIKES_MAX_NUMBER = 200;
const ID_MAX_NUMBER = 25;
const COMMENTES_MAX_NUMBER = 30;
const OBJECTS_NUMBER = 25;

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomIntegerNoRepeat(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createObjects() {

  const createId = getRandomIntegerNoRepeat(1, ID_MAX_NUMBER);
  const getPhoto = getRandomIntegerNoRepeat(1, PHOTOS_MAX_NUMBER);
  const createCommentId = getRandomIntegerNoRepeat(1, 999999999);

  const createComment = () => (
    {
      id: createCommentId(),
      avatar: `img/avatar-${getRandomInteger(1, AVATARS_MAX_NUMBER)}.svg`,
      message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    }
  );

  const createObject = () => ({
    id: createId(),
    url: `photos/${getPhoto()}.jpg`,
    description: DESCRRIPTIONS[getRandomInteger(0, DESCRRIPTIONS.length - 1)],
    likes: getRandomInteger(LIKES_MIN_NUMBER, LIKES_MAX_NUMBER),
    comments: Array.from({ length: getRandomInteger(0, COMMENTES_MAX_NUMBER) }, createComment),
  });

  return Array.from({ length: OBJECTS_NUMBER }, createObject);
}

(createObjects());

