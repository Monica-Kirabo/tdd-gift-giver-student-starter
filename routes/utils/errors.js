class ExpressError extends Error {
  constructor(message, status) {
    super(message);

    // this.message = message;
    this.status = status;
  }
}
class BadRequestError extends ExpressError {
  constructor() {
    super("Bad request", 400);
  }
}
class NotFoundError extends ExpressError {
  constructor() {
    super("Not fOUND", 404);
  }
}

module.exports = { BadRequestError, ExpressError, NotFoundError };
