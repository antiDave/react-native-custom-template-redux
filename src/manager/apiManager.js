import { DEV_API_URL, ENVIRONMENT, PROD_API_URL } from 'react-native-dotenv';
import RNFetchBlob from 'rn-fetch-blob';
import { emptyValidate } from '../helper/genericFunctions';
import { InternetCheck } from '../utils/InternetConnection';

let cancelUpload = null;

const apiManager = {
	GET(classes, header, json = false) {
		return new Promise(async resolve => {
			const internet = await InternetCheck();
			if (!internet) {
				resolve(undefined);
				return;
			}

			const urlHeader = await urlHeaderCreation(classes, header);

			fetch(urlHeader.url, {
				method: 'GET',
				headers: urlHeader.header,
			})
				.then(response => response.json())
				.then(async responseJson => {
					console.log('GET RESPONSE ' + classes.toUpperCase() + "\n" + JSON.stringify(responseJson));

					const res = await appCodeErrorHandle(classes, responseJson);
					resolve(res);
				})
				.catch(error => {
					if (!json) {
						catchErrorHandle(classes, error);
					}
					console.log('ERROR', error);
					resolve(undefined);
				}); //end of fetch
		}); //end of Promise
	}, //end of _fetchGet

	POST(classes, param, header, json = false) {
		return new Promise(async resolve => {
			const internet = await InternetCheck();
			if (!internet) {
				resolve(undefined);
				return;
			}

			const urlHeader = await urlHeaderCreation(classes, header);
			fetch(urlHeader.url, {
				method: 'POST',
				headers: urlHeader.header,
				body: JSON.stringify(param),
			})
				.then(response => response.json())
				.then(async responseJson => {
					console.log('POST RESPONSE ' + classes.toUpperCase() + "\n" + JSON.stringify(responseJson));
					const res = await appCodeErrorHandle(classes, responseJson);
					resolve(res);
				})
				.catch(error => {
					if (!json) {
						catchErrorHandle(classes, error);
					}

					console.log('ERROR', error);

					resolve(undefined);
				}); //end of fetch
		}); //end of Promise
	},//end of _fetchPost

	PUT(classes, param, header, json = false) {
		return new Promise(async resolve => {
			const internet = await InternetCheck();
			if (!internet) {
				resolve(undefined);
				return;
			}

			const urlHeader = await urlHeaderCreation(classes, header);

			fetch(urlHeader.url, {
				method: 'PUT',
				headers: urlHeader.header,
				body: JSON.stringify(param),
			})
				.then(response => response.json())
				.then(async responseJson => {
					console.log('PUT RESPONSE ' + classes.toUpperCase() + "\n" + JSON.stringify(responseJson));
					const res = await appCodeErrorHandle(classes, responseJson);
					resolve(res);
				})
				.catch(error => {
					if (!json) {
						catchErrorHandle(classes, error);
					}
					console.log('ERROR', error);
					resolve(undefined);
				}); //end of fetch
		}); //end of Promise
	}, //end of _fetchPut

	POSTIMAGE(classes, param, base64, header, json = false) {
		return new Promise(async (resolve) => {
			const internet = await InternetCheck();
			if (!internet) {
				resolve(undefined);
				return;
			}

			const urlHeader = await urlHeaderCreation(classes, header);
			urlHeader.header['Content-Type'] = 'multipart/form-data';
			urlHeader.header["Authorization"] = "Bearer access-token";
			urlHeader.header["otherHeader"] = "foo";

			console.warn('urlHeader.header', urlHeader.header);

			let dataaaaaa = [
				{ name: 'image', filename: 'avatar-png.png', type: 'image/png', data: base64 }
			];

			cancelUpload = RNFetchBlob.fetch('POST', urlHeader.url, urlHeader.header, dataaaaaa);
			cancelUpload.uploadProgress((written, total) => {
				console.log('POST IMAGE uploaded', written / total)
			})
				// listen to download progress event
				.progress((received, total) => {
					// console.log('POST IMAGE progress', received / total)
				}).then((res) => res.json())
				.then((res) => {
					// console.warn('POST IMAGE  THEN\n', res);
					resolve(res);
				}).catch((err) => {
					if (err.message.includes("canceled")) {
						resolve("abort");
						return "abort";
					}
					console.warn('POST IMAGE  CATCH\n', err);
					resolve(undefined);
				})
		}); //end of Promise
	},//end of UPLOAD_IMAGE



	UPLOADMULTIPART(classes, param, header, json = false) {
		return new Promise(async (resolve) => {
			const internet = await InternetCheck();
			if (!internet) {
				resolve(undefined);
				return;
			}


			const urlHeader = await urlHeaderCreation(classes, header);
			urlHeader.header['Content-Type'] = 'multipart/form-data';
			urlHeader.header["Authorization"] = "Bearer access-token";
			urlHeader.header["otherHeader"] = "foo";

			console.warn("HEADER", urlHeader.header);


			fetch(urlHeader.url,
				{
					method: 'POST',
					headers: urlHeader.header,
					body: param
				})
				.then((response) => response.json())
				.then(async (responseJson) => {

					resolve(responseJson);

				})
				.catch((error) => {
					if (!json) {
						catchErrorHandle(classes, error);
					}
					console.log('ERROR', error);
					resolve(undefined);
				});


		}); //end of Promise
	},//end of UPLOADMULTIPART

	CANCELUPLOAD() {

		if (cancelUpload !== null) {
			cancelUpload.cancel((err) => {
				console.warn('CANCEL WHILE UPLOADING\n', err);
			})
		}
	},//end of CANCEL_UPLOAD

	CANCELALL() {
		if (cancelALL !== null) {

		}
	},//end of CANCEL_ALL


}//end of API MANAGER

export default apiManager;




function appCodeErrorHandle(classes, response) {
	return new Promise(resolve => {
		//Handling Custom ERROR CODE

		if (response.meta.errCode === 200) {
			resolve(response.data);
		}
		else {
			if (emptyValidate(response.meta.message)) {

				console.log(response.meta.message);

			}
			resolve(undefined);
		}

		return;

	});
}

async function catchErrorHandle(classes, error) {
	return new Promise(resolve => {
		if (error.toString().includes('Error: Request failed with status code 401')) {
			resolve(undefined);

			return;
		} else {
			console.log(classes.toUpperCase() + ' Error By Catch==>\n' + error);
			if (error.message.includes("JSON Parse error: Unrecognized token '<'")) {
				resolve(undefined);

				console.log(error.toString(), '');
				return;
			}


			resolve(undefined);

			console.log(error.toString(), '');
			return;
		}
	});
}

function urlHeaderCreation(classes, header) {
	return new Promise(async resolve => {
		let response = {};
		let url_ = null;
		let header_ = null;

		if (!!classes) {
			if (ENVIRONMENT == 'production') {
				// console.log('PROD_API_URL USING URL HEADER CREATION', PROD_API_URL);

				url_ = PROD_API_URL + classes
			}
			else {
				// console.log('DEV_API_URL', DEV_API_URL);
				url_ = DEV_API_URL + classes
			}


			header_ = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			};

			if (!!header) {
				for (let i = 0; i < header.length; i++) {
					const key = Object.keys(header[i]);
					const values = Object.values(header[i]);
					header_[key[0]] = values[0];
				}
			}
			response['url'] = url_;
			response['header'] = header_;

			resolve(response);
		} else {
			console.log('API url is not valid!');
			resolve();
		}
	});
}