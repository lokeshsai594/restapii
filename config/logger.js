const { createLogger, format, transports} = require('winston');
const { combine,timestamp,label,printf } = format;

const myformat = printf( ({ level,message,timestamp}) => {
      return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    
    format: combine( 
        timestamp(),
        myformat
    ),
    transports:[
        
        new transports.Console(),
        new transports.File({ filename:'info.log'})
    ]
})

module.exports = logger;