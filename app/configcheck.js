
const Joi = require('joi');

const schema = Joi.object().keys({
  server: Joi.object().default(),
  auth: Joi.object().keys({
    cookie: Joi.object({
      secret: Joi.string().min(8).default('>kshdl:_As,d_:?=§$.,uadI((/§ujSda>dja#sl",das34ohsjd,mN;S:;DAp=)"3434>'),
      name: Joi.string().default('SID'),
    }).default(),
    rules: Joi.object({
      username: Joi.object({
        minLength: Joi.number().default(1),
        maxLength: Joi.number().default(32),
        pattern: Joi.string().optional(),
      }).default(),
      password: Joi.object({
        minLength: Joi.number().default(8),
        maxLength: Joi.number().default(128),
        pattern: Joi.string().email().optional(),
      }).default(),
    }).default(),
    salt: Joi.number().min(1).default(9),
  }).default(),
});


module.exports = function (config) {
  const result = schema.validate(config);

  if(result.error){
    throw result.error;
  }

  return result.value;
};