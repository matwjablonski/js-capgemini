export const generateRandomId = function (length = 10) {
  const id = Array.from(
    { length }, 
    () => Math.floor(Math.random() * 10)
  ).join("");

  return id;
}

export class AppError extends Error {
  constructor(message, moduleName = 'App') {
    super(message);
    this.name = '[Moduł ' + moduleName + ']: ';
  }
}
