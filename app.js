// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

const config = {
	views: 'views', 		// Set views directory 
	static: 'public', 		// Set static assets directory
	db: {
        url: 'mongodb://mongo-proj:mongo-proj123@ds145113.mlab.com:45113/mongo-proj',
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('DB Successfully Connected!')
		}
	}
}

const app = vertex.app(config) // initialize app with config options


/* mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://mongo-proj:mongo-proj123@ds145113.mlab.com:45113/mongo-proj';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/

// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes


module.exports = app