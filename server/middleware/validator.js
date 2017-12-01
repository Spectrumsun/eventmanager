import db from '../models';

const Center = db.Center;
const Event = db.Event;

class Validate {
  static validateSigup(req, res, next) {
    req.sanitizeBody('fullname');
    req.checkBody('fullname', 'You must supply a name!').notEmpty();
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({ remove_dots: false, remove_extension: false, gmail_remove_subaddress: false });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
    req.checkBody('confirmPassword', 'Confirmed Password cannot be blank!').notEmpty();
    req.checkBody('confirmPassword', 'Oops! Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).send({ message: 'Sigup errors', errors });
      return; // stop the fn from running
    }
    next(); // there were no errors!
  }

  static validatelogin(req, res, next) {
    req.sanitizeBody('fullname');
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({ remove_dots: false, remove_extension: false, gmail_remove_subaddress: false });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      res.status(400).send({ message: 'login errors', errors });
      return; // stop the fn from running
    }
    next(); // there were no errors!
  }

  static validateCreateEvent(req, res, next) {
    req.checkBody('name', 'You must supply an Event  name!').notEmpty();
    req.checkBody('date', 'You must supply a date !').notEmpty();
    req.checkBody('time', 'You must supply a time!').notEmpty();
    req.checkBody('purpose', 'You must supply a purpose !').notEmpty();
    req.checkBody('center', 'You must pick a center!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).send({ message: 'Errors adding new event', errors });
    }
    next();
  }


  static validateCreateCenter(req, res, next) {
    req.checkBody('name', 'You must supply a Center  name!').notEmpty();
    req.checkBody('city', 'You must supply a city !').notEmpty();
    req.checkBody('address', 'You must supply a address!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).send({ message: 'Error adding new Center', errors });
      // stop the fn from running
    }
    next();
  }

  static checkDate(req, res, next) {
    const newCenter = req.body.date;
    const userInfo = req.body.id;
    Center.findById(req.body.center, { include: [{ model: Event, as: 'events', }], })
      .then((center) => {
        const centerItems = center.toJSON();
        const dates = [];
        centerItems.events.forEach((event) => {
          dates.push(event.eventdate);
          if (userInfo == dates.userId) {
            return;
          }
          next();
        });

        const newDate = dates;
        for (let i = 0; i < newDate.length; i++) {
          if (newCenter == newDate[i]) {
            return res.status(400).send({ message: `Sorry Center booked for that date. Please look through the aleady booked dates for the centers ${dates}. You can choose another date or another center.` });
          }
        }
        next();
      });
  }
}


export default Validate;
