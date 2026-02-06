"use strict";

export async function asyncSome(array, callback) {
  let result = false;

  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    result = await callback(item, index, array);

    if (result) {
      break;
    }
  }

  return result;
}

export async function asyncEvery(array, callback) {
  let result = true;

  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    result = await callback(item, index, array);

    if (!result) {
      break;
    }
  }

  return result;
}

export async function asyncReduce(array, callback, initialValue) {
  let value = initialValue; ///

  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    value = await callback(value, item, index, array);
  }

  return value;
}

export async function asyncForEach(array, callback) {
  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    const item = array[index];

    await callback(item, index, array);
  }
}

export default {
  asyncSome,
  asyncEvery,
  asyncReduce,
  asyncForEach
};
