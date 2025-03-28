const joi = require('joi');


exports.registerValidation = async (req, res, next) => {
  const schema = joi.object({
    fullname: joi.string().min(3).trim().required().pattern(/^[A-Za-z]/),
    email: joi.string().email().trim().required(),
    confirmEmail: joi.string().email().trim().required(),
    username: joi.string().min(3).trim().required(),
    phoneNumber: joi.string().min(11).max(11).required().pattern(/^[0-9]+$/),
    gender: joi.string().trim().min(4).max(6).required().pattern(/^(Male|Female)$/),
    age: joi.number().required(),
    age: joi.string().required().pattern(/^(1[89]|[2-9][0-9]|[1-9][0-9]{2,})$/),
    category: joi.string().min(3).trim().required().pattern(/^[A-Za-z]/),
    password: joi.string().required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{9,}$/),
    confirmPassword: joi.string().required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{9,}$/),
    profilePic: joi.string().uri().optional(),
  });

  const { error } = schema.validate(req.body, { abortEarly: true });

  if (error) {
    return res.status(400).json({
      message: error.message
    })
  };

  next();
};