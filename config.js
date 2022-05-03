import Joi from "joi";
import dotenv from "dotenv";

dotenv.config();

const config = {
  client_id: process.env.CLIENT_ID,
  redirect_uri: process.env.REDIRECT_URI,
  client_secret: process.env.CLIENT_SECRET
};

const envVarsSchema = Joi.object({
  client_id: Joi.string().required(),
  redirect_uri: Joi.string().required(),
  client_secret: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default config;
