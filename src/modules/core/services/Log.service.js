import CONSTANTS from '/@/constant';

const colorSuccess = 'hsl(94, 52%, 50%)';
const colorError = 'hsl(6, 100%, 60%)';
const colorInfo = 'hsl(198, 7%, 64%)';
const colorText = 'hsl(220, 18%, 97%)';

const isProduction = CONSTANTS.IS_PRODUCTION;

/**
 * Muestra un mensaje personalizado de confirmación por la consola
 *
 * @param {String} message
 */
const success = message => {
  if (isProduction) return;
  console.log(`%c ${message} `, `background: ${colorSuccess}; padding: 1px; border-radius: 3px; color: ${colorText};`);
};

/**
 * Muestra un mensaje personalizado de error por la consola
 *
 * @param {String} message
 */
const error = message => {
  if (isProduction) return;
  console.log(`%c ${message} `, `background: ${colorError}; padding: 1px; border-radius: 3px; color: ${colorText};`);
};

/**
 * Muestra un mensaje personalizado de información por la consola
 *
 * @param {String} message
 */
const info = message => {
  if (isProduction) return;
  console.log(`%c ${message} `, `background: ${colorInfo}; padding: 1px; border-radius: 3px; color: ${colorText};`);
};

export default {
  success,
  error,
  info,
};
