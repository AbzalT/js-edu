/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
// Базовая программа обучения - 500 часов
// Продвинутая программа обучения - 800 часов
// focus - сколько времени студент уделяет в неделю обучению
const getTimeForEducation = (focus = 'family', knowsProgramming = true, config = {family: 4}) => Math.ceil((knowsProgramming ? 800 : 800 + 500) / config[focus]);
module.exports = getTimeForEducation;