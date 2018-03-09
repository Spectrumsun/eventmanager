import { Event, Center } from '../models';


class Validate {
  static validateAdmin(req, res, next) {
    const roles = req.user.role;
    if (roles != process.env.ADMIN) {
      return res.status(400).json({ messgae: 'Only an admin can create centers' });
    }
    next();
  }

  static validateEventOwner(req, res, next) {
    Event.findById(req.params.id)
      .then((event) => {
        const roles = req.user.id;
        if (roles != event.userId) {
          return res.json({ message: 'You are not owner of the event' });
        }

        if (!event) {
          return res
            .status(404)
            .send({ message: 'Event Not Found' });
        }
      });
    next();
  }

  static validateSigup(req, res, next) {
    req.sanitizeBody('fullname');
    req.checkBody('fullname', 'You must supply a name!').notEmpty();
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({ remove_dots: false, remove_extension: false, gmail_remove_subaddress: false });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
    req.checkBody('confirmPassword', 'Oops! Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      res.status(400).json({ message: 'Signup Errors', errorMessage });
      return; // stop the fn from running
    }
    next(); // there were no errors!
  }

  static validatelogin(req, res, next) {
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({ remove_dots: false, remove_extension: false, gmail_remove_subaddress: false });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      res.status(400).json({ message: 'login errors', errorMessage });
      return; // stop the fn from running
    }
    next(); // there were no errors!
  }

  static validateCreateEvent(req, res, next) {
    req.checkBody('name', 'You must supply an Event name!').notEmpty();
    req.checkBody('date', 'You must supply a date !').notEmpty();
    req.checkBody('time', 'You must supply a time!').notEmpty();
    req.checkBody('purpose', 'You must supply a purpose !').notEmpty();
    req.checkBody('center', 'You must pick a center!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      return res.status(400).json({ message: 'Errors adding new event', errorMessage });
    }
    next();
  }


  static validateCreateCenter(req, res, next) {
    req.checkBody('name', 'You must supply a Center  name!').notEmpty();
    req.checkBody('city', 'You must supply a city !').notEmpty();
    req.checkBody('address', 'You must supply a address!').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
      const errorMessage = errors.map(err => err.msg);
      return res.status(400).json({ message: 'Error adding new Center', errorMessage });
      // stop the fn from running
    }
    next();
  }


  static checkDate(req, res, next) {
    if ((new Date(req.body.date) - Date.now()) < 0) {
  	  return res.status(400).json({ message: 'You cant set a Past date for the event' });
    }

    if (isNaN(new Date(req.body.date))) {
      return res.status(400).json({ message: 'invalid date format make sure it\'s YYYY-MM-DD format' });
    }

    if (!req.body.time.match(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/)) {
      return res.status(400).json({ messgae: 'invalid time format make sure it\'s HH:MM format 24 hours' });
    }

    if (isNaN(req.body.center)) {
      return res.status(400).json({ messgae: 'Only Number allowed for Center' });
    }


    Event.findOne({
      where: {
        centerId: req.body.center,
        eventdate: new Date(req.body.date).toISOString(),
        // date: req.body.eventdate
      }
    }).then((event) => {
      // console.log('-----',event.toJSON())
      if (event && event.id != req.params.id) {
        return res.status(409).json({ message: 'Center booked for that date already' });
      }
      next();
    });
  }
}


export default Validate;
