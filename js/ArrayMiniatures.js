import { createRandomIdFromRangeGenerator, getRandomInteger, getRandomArrayElement } from "./utils.js";
import { NAMES, COMMENTS, DESCRIPTIONS } from "./data.js";

const PHOTO_ARRAY_SIZE = 25;

const getPhotoID = createRandomIdFromRangeGenerator(1, 26);
const generateCommentId = createRandomIdFromRangeGenerator(1, 26);
const getNumberPhoto = createRandomIdFromRangeGenerator(1, 26);

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: getPhotoID(),
  url: `photos/${getNumberPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComments),
});

const getArrayMiniatures = () =>
  Array.from({ length: PHOTO_ARRAY_SIZE }, createPhotoDescription);

export { getArrayMiniatures };


// import { MESSAGES, NAMES, MIN_COMMENTS, MAX_COMMENTS, MIN_LIKES, MAX_LIKES } from "./data.js";

// // Функция получения рандомного числа из заданного диапазона
// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   let previousResult = -1;
//   return () => {
//     const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
//     // Исключения повторения значения предыдущего вызова (для коментариев)
//     if(previousResult !== result) {
//       previousResult = result;
//     return result;
//     }
//       // Просто берем следующий в наборе сообщений
//       return result === upper ? lower : result + 1;
//   };
// };

//  // Создание вложенного объекта Comments
// const createComment = () => {
//   let id = 1;
//   const messageArray = MESSAGES.split('. ');
//   const nameArray = NAMES.split(', ');
//   const indexMessageArr = getRandomInteger (0, messageArray.length - 1);
//   const indexNameArr = getRandomInteger (0, nameArray.length -1);

//   // Разобьем комментарии с разделителем - !
//   messageArray.splice(0, 1, messageArray[0].split('! ')[0], messageArray[0].split('! ')[1]);

//   // Возвращаемая функция
//   return () => {
//   const comment = {};
//   const idAvatar = getRandomInteger (1, 6);
//   comment.id = id;
//   comment.avatar = `img/avatar-${idAvatar ()}.svg`;
//   comment.message = `${messageArray[indexMessageArr()]}. ${messageArray[indexMessageArr()]}`;
//   comment.name = `${nameArray[indexNameArr()]}`;
//   id++;
//   return comment;
//   };
// };

// // Количество комментариев
// const numComments = getRandomInteger (MIN_COMMENTS, MAX_COMMENTS);

// // Количество лайков
// numLikes = getRandomInteger (MIN_LIKES, MAX_LIKES);

// // Функция создания объекта
// const createPhoto = () =>{
//   let id = 1;

//   return () =>{
//   const photo= {};
//   photo.id = id;
//   photo.url = `photos/${id}.jpg`;
//   photo.description = `Это фотограoия №${id}`;
//   photo.likes = numLikes();

//   // Создаем список комментариев
//   photo.comments = Array.from({length : numComments()}, createComment());
//   id++;
//   return photo;
//   };
// };

// // Создаем массив описаний фото
// const photoArray = Array.from({length : 25},createPhoto());

// console.log(photoArray);
