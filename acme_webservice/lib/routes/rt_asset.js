var dbAsset = require('../logic/db_asset.js');

var initRoutes = function (app) {
	//This route is invoked to info of all assets 
	app.get('/api/v1/asset', getAllAssets);
	
	//This route is invoked to return information of a particular asset
	app.get('/api/v1/asset/:id', getAssetById);

	//This route is invoked to add a new asset
	app.post('/api/v1/asset', postAsset);

	//This route is invoked to update an existing asset
	app.put('/api/v1/asset', putAsset);

	//This route is invoked to delete an existing asset
	app.delete('/api/v1/asset/:id', deleteAsset);
};

var getAllAssets = function(req, res){
	console.log('ACME WS Received Request GET: ', req.originalUrl);
	dbAsset.getAllAssets(req, res);
};

var getAssetById = function(req, res){
	console.log('ACME WS Received Request GET: ', req.originalUrl);
	dbAsset.getAssetById(req, res);
};

var postAsset = function(req, res){
	console.log('ACME WS Received Request POST: ', req.originalUrl);
	dbAsset.postAsset(req, res);
};

var putAsset = function(req, res){
	console.log('ACME WS Received Request PUT: ', req.originalUrl);
	dbAsset.putAsset(req, res);
};

var getAssetById = function(req, res){
	console.log('ACME WS Received Request DELETE: ', req.originalUrl);
	dbAsset.deleteAsset(req, res);
};

module.exports = {
	initRoutes: initRoutes
};
