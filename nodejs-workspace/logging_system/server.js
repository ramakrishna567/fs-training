const log4js = require('log4js');
// const log4jsConf = require('./log4jsConf.json');

log4js.configure('log4jsConf.json')

let logger = log4js.getLogger('learn'); //learn is logger name
logger.level = 'TRACE';

logger.trace("This is just TRACE log");
logger.debug("This is just DEBUG log");
logger.info("This is just INFO log");
logger.warn("This is just WARN log");
logger.error("This is just ERROR log");
logger.fatal("This is just FATAL log");