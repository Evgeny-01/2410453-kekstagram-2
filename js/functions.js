const checkLength = (string = '', maxSymbols = 1) => (string.length <= maxSymbols);

checkLength();

// ----------------------------------------------------------------------------------------

const isPalindrome = (string = '') => {

  string = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }

  return string === reversed;
};

isPalindrome();

const verifyPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = normalizedString.split('').reverse().join('');
  return reverseString === normalizedString;
};

// verifyPalindrome();

console.log(verifyPalindrome("A man a plan a canal Panama")); // true
console.log(verifyPalindrome("Hello")); // false


// --------------------------------------------------------------------------------------

const extractNumbers = (string) => {
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};

// extractNumbers();

console.log(extractNumbers("abc123")); // 123
console.log(extractNumbers("no numbers")); // NaN
console.log(extractNumbers("3 cats and 4 dogs")); // 34

function stringToNumber(str) {
  return Number(
    [...str].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN
  );
}

// stringToNumber();

console.log(stringToNumber("abc123")); // 123
console.log(stringToNumber("no numbers")); // NaN
console.log(stringToNumber("3 cats and 4 dogs")); // 34


function isMeetingWithinWorkHours(workStart, workEnd, meetingStart, meetingDuration) {
  // преобразование времени в минуты с начала суток
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};

console.log(isMeetingWithinWorkHours('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingWithinWorkHours('8:0', '10:0', '8:0', 120));     // true
console.log(isMeetingWithinWorkHours('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingWithinWorkHours('14:00', '17:30', '08:0', 90));  // false
console.log(isMeetingWithinWorkHours('8:00', '17:30', '08:00', 900)); // false
