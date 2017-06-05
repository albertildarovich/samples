const snakeCase = require(`lodash.snakecase`);
const pascalCase = require(`pascalcase`);
export const PROMISE_TYPE_SUFFIXES = [``, `Pending`, `Success`, `Error`];
export const METHODS = [
  `create`,
  `fetch`,
  `update`,
  `patch`,
  `delete`,
  `count`,
];
export const iterate = function (callback, entity, methods = METHODS, suffixes = PROMISE_TYPE_SUFFIXES) {
  const ENTITY = snakeCase(entity);
  suffixes.forEach(suffix => methods.forEach((method) => {
    const type = (`${ENTITY}_${method}${suffix && `_`}${suffix}`).toUpperCase();
    const shortCut = method + pascalCase(suffix);
    callback(type, shortCut, method, suffix);
  }));
};
// noinspection Eslint
function actionCrudTypesFor(entity, methods = METHODS, suffixes = PROMISE_TYPE_SUFFIXES) {
  const typesMap = {};
  const callback = ((type, shortCut) => {
    typesMap[type] = type;
    typesMap[shortCut] = type;
  });
  // noinspection Eslint
  iterate(...[callback].concat([].slice.call(arguments)));
  return typesMap;
}
export default actionCrudTypesFor;
