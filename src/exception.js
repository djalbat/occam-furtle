"use strict";

export default class Exception {
  constructor(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }

  static fromMessage(message) {
    const exception = new Exception(message);

    return exception;
  }
}
