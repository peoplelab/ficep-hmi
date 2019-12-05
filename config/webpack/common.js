//----------------------------------------------------------------------------------------
// File: common.js
//
// Desc: File di configurazione di webpack comune a tutti gli ambienti di rilascio
// Path: /src/config/webpack/common
//----------------------------------------------------------------------------------------


	const path                         = require('path');
	const {HotModuleReplacementPlugin} = require('webpack');
	const MiniCssExtractPlugin         = require('mini-css-extract-plugin');
	const globalVars                   = require('../global/client');
	const {ClientTranslations}         = require('../plugin/webpack.translations');
	const {ClientConfiguration}        = require('../plugin/webpack.configuration');
	const {NODE_ENV, COMPILE_ENV}      = process.env;


	const entry = NODE_ENV === 'RELEASE' ? ['./src/index.js'] : ['./src/index.js', 'webpack-hot-middleware/client'];


	const addPlugins = NODE_ENV === 'RELEASE' ? [
		new ClientTranslations(),
		new ClientConfiguration(),
	]: [];


	// Dichiarazione costanti _p<Name> (paths) per la costruzione degli alias usati nelle direttive IMPORT (vedi sez. ".resolve.alias")
	const applicationPath      = '../../src/';
	const userManagementPath   = '../../src/Xuser/';
	const commonComponentsPath = applicationPath + 'widgets/common/';


	const _pSource     = '../../src/';
	const _pUser       = _pSource + 'Xuser/';
	const _pComponents = _pSource + 'widgets/common/';
//	const _pComponents = _pSource + 'Xcomponents/';				// Mettere a posto le dipendenze del common.controller e ppi scommentare
	const _pCommon     = _pSource + 'Xcommon/';





	// ** Costruzione JSON di configurazione **
	module.exports = {
		entry,
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				chunks            : 'all',
				maxInitialRequests: Infinity,
				minSize           : 0,
				cacheGroups       : {
					vendor            : {
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							// get the name. E.g. node_modules/packageName/not/this/part.js
							// or node_modules/packageName
							const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
							// npm package names are URL-safe, but some servers don't like @ symbols
							return `${packageName.replace('@', '')}.npm`;
						},
					},
				},
			},
		},
		module: {
			rules: [{
					test   : /\.jsx?$/i,
					exclude: /node_modules/,
					use    : [{
						loader : 'babel-loader',
						options: {
							cacheDirectory  : true,
							cacheCompression: true,
						},
					},{
						loader : 'stripblock-loader',
						options: { 
							env: COMPILE_ENV === 'PRODUCTION' ? 'dev' : 'prod'
						},
					  }
					]
				},{
					test   : /\.jsx?$/i,
					exclude: /node_modules/,
					loader : 'eslint-loader',
				},{
					test   : /\.s?css$/,
					exclude: /node_modules/,
					use    : [{
							loader : MiniCssExtractPlugin.loader,
							options: { hmr: COMPILE_ENV !== 'PRODUCTION' }
						},{
							loader : 'css-loader',
							options: { sourceMap: true } 
						},{
							loader : 'resolve-url-loader',
							options: { sourceMap: true }
						},{ 
							loader : 'postcss-loader',
							options: { sourceMap: true }
						},{
							loader : 'sass-loader',
							options: { sourceMap: true }
					}],
			}],
		},
		plugins: [
			new HotModuleReplacementPlugin(),
			globalVars,
			...addPlugins,
		],
		resolveLoader: {
			alias: {
				'stripblock-loader': path.resolve(__dirname, '../loader/stripblock-loader')
			}
		},


		// ** ---
		// ** Dichiarazione degli alias: path degli elementi (es. componenti comuni) da importare **
		// ** ---
		resolve: {
			extensions: ['.js', '.jsx', 'json', 'scss', 'css'],
			alias: {

				// ** Commons **
				'cBase'                 : path.resolve(__dirname, _pCommon + 'controller/controller.base'),

				// ** Gestione utenti **
				'userController'        : path.resolve(__dirname, _pUser + 'controller/user.controller'),
				'userModel'             : path.resolve(__dirname, _pUser + 'model/user.model'),
				'userView'              : path.resolve(__dirname, _pUser + 'view/'),


				// ** Components **
				'resetPassword'         : path.resolve(__dirname, _pComponents + 'ResetPassword'),							// Componente "rigenera password"
				'button'                : path.resolve(__dirname, _pComponents + 'Button'),									// Componente "Button"
			}
		  },
	};


