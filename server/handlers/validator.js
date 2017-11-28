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
      res.status(404).send({ message: 'sigup errors', errors });
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
      res.status(404).send({ message: 'login errors', errors });
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
      return res.status(404).send({ message: 'sigup errors', errors });
    }
    next();
  }


  static validateCreateCenter(req, res, next) {
    req.checkBody('name', 'You must supply a Center  name!').notEmpty();
    req.checkBody('city', 'You must supply a city !').notEmpty();
    req.checkBody('address', 'You must supply a address!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      return res.status(404).send({ message: 'Error creating Center', errors });
      // stop the fn from running
    }
    next();
  }

  static checkDate(req, res, next) {
    const newCenter = req.body.date;
    const events = Center.findById(newCenter, {
      include: [{
        model: Event,
        as: 'events',
      }],
    });
    /*  .then((center) => {
        const centerItems = center.toJSON();
        // console.log(centerItems)
        const dates = [];
        centerItems.events.forEach((event) => {
          dates.push(event.eventdate);
        });
        console.log(dates);
      }); */
    next();
  }
}


export default Validate;
