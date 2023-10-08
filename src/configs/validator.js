import Joi from "joi";

const validator = Joi.object({
    brand: Joi.string().required().regex(/^[a-zA-Zа-яА-Я]{1,15}$/).messages({
        'string.pattern.base' : 'тільки літери',
        'string.required' : 'req'
    }),
    price: Joi.number().required().min(1).max(1000000),
    year: Joi.number().required().min(1990).max(new Date().getFullYear())
});
 export {
     validator
 }