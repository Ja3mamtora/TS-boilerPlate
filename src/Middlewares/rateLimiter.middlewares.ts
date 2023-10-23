import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
	windowMs: 60 * 1000, //1-min
	max: 5,
	standardHeaders: true,
	legacyHeaders: false,
	skipSuccessfulRequests: false,
});