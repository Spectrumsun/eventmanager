import { Event } from '../models';

require('dotenv').config();

/** Class Validate. */
class Validate {
  /**
   * verify the current user is a Admin
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static validateAdmin(req, res, next) {
    const roles = req.user.role;
    if (roles != process.env.ADMIN) {
      return res.status(400).json({
        message: 'You have to be an Admin to do that'
      });
    }
    next();
  }

  /**
   * verify the validateSigup body
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static validateSigup(req, res, next) {
    // check input to see if user
    // filled the correct inforamtion for signup route
    req.sanitizeBody('fullname');
    req.checkBody(
      'fullname',
      'You must supply a name!'
    )
      .notEmpty();
    req.checkBody(
      'email',
      'That Email is not valid!'
    )
      .isEmail();
    req.sanitizeBody('email')
      .normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
      });
    req.checkBody(
      'password',
      'Password Cannot be Blank cant be less than six Charaters!'
    )
      .notEmpty().isLength({ min: 6 });
    req.checkBody(
      'confirmPassword',
      'Oops! Your passwords do not match'
    ).equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      res.status(400).json({
        message: 'Signup Errors',
        errorMessage
      });
      return; // stop the fn from running
    }
    next(); // there were no errors!
  }

  // check req,body for user input
  /**
   * verify the validatelogin body
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static validatelogin(req, res, next) {
    req.checkBody(
      'email',
      'That Email is not valid!'
    ).isEmail();
    req.sanitizeBody('email')
      .normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
      });
    req.checkBody(
      'password',
      'Password Cannot be Blank!'
    ).notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      res.status(400).json({
        message: 'login errors',
        errorMessage
      });
      return; // stop the fn from running
    }
    next(); // there were no errors!
  }

  // cheeck req.body when user add a event
  /**
   * verify the validateCreateEvent body
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static validateCreateEvent(req, res, next) {
    req.checkBody(
      'name',
      'You must supply an Event name!'
    ).notEmpty();
    req.checkBody(
      'date',
      'You must supply a date !'
    ).notEmpty();
    req.checkBody(
      'time',
      'You must supply a time!'
    ).notEmpty();
    req.checkBody(
      'purpose',
      'You must supply a purpose !'
    ).notEmpty();
    req.checkBody(
      'center',
      'You must pick a center!'
    ).notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      return res.status(400).json({
        message: 'Errors adding new event',
        errorMessage
      });
    }
    next();
  }

  // cheeck req.body for password  reset
  /**
   * verify the validateAdmin adds attatched on every request
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static passwordReset(req, res, next) {
    req.checkBody(
      'password',
      'Password Cannot be Blank cant be less than six Charaters!'
    )
      .notEmpty().isLength({ min: 6 });
    req.checkBody(
      'confirmPassword',
      'Oops! Your passwords do not match'
    )
      .equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      return res.status(400).json({
        message: 'Errors changing password',
        errorMessage
      });
    }
    next();
  }
  /**
   * verify the validateAdmin adds attatched on every request
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static forgetPassword(req, res, next) {
    req.checkBody(
      'email',
      'That Email is not valid!'
    )
      .isEmail();
    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      return res.status(400).json({
        message: 'Errors adding new event',
        errorMessage
      });
    }
    next();
  }

  /**
   * verify the validateAdmin adds attatched on every request
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static validateCreateCenter(req, res, next) {
    req.checkBody(
      'name',
      'You must supply a Center  name!'
    ).notEmpty();
    req.checkBody(
      'city',
      'You must supply a city !'
    ).notEmpty();
    req.checkBody(
      'address',
      'You must supply a address!'
    ).notEmpty();
    req.checkBody(
      'availability',
      'You must add availability of center!'
    ).notEmpty();
    req.checkBody(
      'imageurl',
      'You must add imageurl form cloudinary!'
    ).notEmpty();
    req.checkBody(
      'publicUrlId',
      'You add public Id from cloudinary!'
    ).notEmpty();
    req.checkBody(
      'about',
      'You must About for center!'
    ).notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      return res.status(400).json({
        message: 'Error adding new Center',
        errorMessage
      });
      // stop the fn from running
    }
    next();
  }

  /**
   * verify added date input in the body
   *
   * @param {Object} req HTTP request object
   * @param {Object} res HTTP response object
   *  @param {Object} next HTTP response object
   *
   * @returns {void}
   */
  static checkDate(req, res, next) {
    // check date is not in the past
    if ((new Date(req.body.date) - Date.now()) < 0) {
  	  return res.status(400).json({
        message: 'You cant set a Past date for the event'
      });
    }

    // check data is in the correct format
    if (isNaN(new Date(req.body.date))) {
      return res.status(400).json({
        message: 'invalid date format make sure it\'s YYYY-MM-DD format'
      });
    }

    // check the time is in the correct format
    if (!req.body.time.match(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/)) {
      return res.status(400).json({
        message: 'invalid time format make sure it\'s HH:MM format 24 hours'
      });
    }

    // check the center is a number
    if (isNaN(req.body.center)) {
      return res.status(400).json({
        message: 'Only Number allowed for Center'
      });
    }

    // make sure not event add to the center is the same date
    Event.findOne({
      where: {
        centerId: req.body.center,
        eventdate: new Date(req.body.date).toISOString(),
      }
    }).then((event) => {
      if (event && event.id != req.params.id) {
        return res.status(409).json({
          message: 'Center booked for that date already'
        });
      }
      next();
    });
  }
}


export default Validate;
