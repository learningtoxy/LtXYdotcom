/*
*	SERVER: SERVER APP
*
*	This module runns the express server
*/

//  NOTIFY PROGRESS
//  DEFINE DEPENDENCIES
const express           = require('express')
const bodyParser        = require('body-parser');

//  LOCAL VARIABLES
const app               = express()
const port              = process.env.PORT || 3000;
const urlencodedParser  = bodyParser.urlencoded({ extended: false });
const jsonParser        = bodyParser.json();

/*
*	USE Declarations
*
*/
//  EXECUTE: BODY PARSING
app.use(jsonParser);                // for parsing application/json
app.use(urlencodedParser);          // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));  // folder being servered

app.use('/', function(req, res, next) {
	//log the url to the console
	console.log('Request Url: ' + req.url);
	next();
});

/*
*	GET Declarations
*
*/



/*
*	EXECUTE: RUN THE SERVER
*/

app.listen(port, () => {
    console.log(`Express server is up and running on port ${port}`)
    //identify the environment
	if(process.env.IS_PROUDCTION == 'true') {
		console.log('is production');
		//console.log('got these codes:', JSON.parse(process.env.PROMO_CODES));
	} else {
		console.log('is development');
		//console.log(JSON.parse(process.env.PROMO_CODES));
	}
})
