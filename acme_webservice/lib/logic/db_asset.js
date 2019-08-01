var csvParser = require('csv-parse');
var fs = require('node-fs');
var bluebird = require('bluebird');
var _ = require("lodash");
//var filePath = "../InTouch_Tech_Assessment/csv_files/dataset.csv";

/*
This function get all assets from the database and returns basic info along with
info of the latest report
*/
var getAllAssets = function(req, res){
	return db.asset.findAll({
		include: [{
			model: db_latest_report,
			as: "assetReport",
			attributes: ["id"],
			required: true
		}]
	})
	.then(function(assets){ 
		assets = _.map(assets, function(asset){
			asset = asset.get({plain: true});
			return asset;
		});

		assets = _.keyBy(assets, "id");

		return bluebird.resolve({message: "Successfully processed GET All assets", result: assets});
	});
};


var getAssetById = function(req, res){
	var assetId = req.params.id;
	return db.asset.findOne({
		where: {id: assetId},
		include: [{
			model: db_latest_report,
			as: "assetReport",
			attributes: ["id"],
			required: true
		}]
	})
	.then(function(asset){ 
		asset = asset.get({plain: true});
		return bluebird.resolve({message: "Successfully processed GET Asset By Id", result: asset});
	});
};

var postAsset = function(req, res){
	var assetData = req.body;
	assetData.create_timestamp = Math.round(new Date().getTime() / 1000); 

	var dbAsset = db.asset.build(assetData);
	return dbAsset.save()
	.then(function(device){
		return bluebird.resolve({message: "Post Asset Successfull", result: asset});
	});
};

var putAsset = function(req, res){
	
};

var deleteAsset = function(req, res){
	
};


module.exports = {
	getAllAssets: getAllAssets,
	getAssetById: getAssetById,
	postAsset: postAsset,
	putAsset: putAsset,
	deleteAsset: deleteAsset
};