import { ENVIRONMENT, DEV_API_URL, PROD_API_URL } from 'react-native-dotenv';
import ErrorSnackBar from './ErrorSnackBar';
import { InternetCheck } from './InternetCheck';
import ExcludeCode from './ExcludeCode';
import { Language } from '../App/GlobalVariables/global';

export const _fetchGet = (classes, header) => {
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
				const res = await appCodeErrorHandle(classes, responseJson);
				resolve(res);
			})
			.catch(error => {
				catchErrorHandle(classes, error);
				resolve(undefined);
			}); //end of fetch
	}); //end of Promise
}; //end of _fetchGet

export const _fetchPost = (classes, header, param, json = false) => {
	return new Promise(async resolve => {
		const internet = await InternetCheck();
		if (!internet) {
			resolve(undefined);
			return;
		}

		const urlHeader = await urlHeaderCreation(classes, header);
		console.warn('URL HEADER FETCH POST', urlHeader);

		fetch(urlHeader.url, {
			method: 'POST',
			headers: urlHeader.header,
			body: JSON.stringify(param),
		})
			.then(response => response.json())
			.then(async responseJson => {
				const res = await appCodeErrorHandle(classes, responseJson);
				resolve(res);
			})
			.catch(error => {
				if (!json) {
					catchErrorHandle(classes, error);
				}

				resolve(undefined);
			}); //end of fetch
	}); //end of Promise
}; //end of _fetchPost

export const _fetchPut = (classes, header, param, json = false) => {
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
				const res = await appCodeErrorHandle(classes, responseJson);
				resolve(res);
			})
			.catch(error => {
				if (!json) {
					catchErrorHandle(classes, error);
				}
				resolve(undefined);
			}); //end of fetch
	}); //end of Promise
}; //end of _fetchPut

export const _uploadFile = (classes, header, param, type, json = false) => {
	return new Promise(async resolve => {
		const internet = await InternetCheck();
		if (!internet) {
			resolve(undefined);
			return;
		}

		let url = apiUrl + classes;
		const body = await bodyCreationFileUpload(param);
		if (!body) {
			resolve(undefined);
			return;
		}

		let type_ = "post";
		if (type) {
			type_ = type;
		}
		let uploadResponse = await upload(url, header, body, type_);

		resolve(uploadResponse)



	}); //end of Promise
}; //end of _uploadFile

function upload(url, header, body, method) {
	return new Promise(async (resolve) => {
		fetch(url,
			{
				method: method.toUpperCase(),
				headers: header,
				body: body
			})
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson.meta.errCode === 0) {
					console.warn(' Reposnse \n' + JSON.stringify(responseJson.data));
					resolve(responseJson.data);
				}
				else {
					if (responseJson.meta.errCode === 1101) {
						resolve();
						ErrorSnackBar('Api not found!', '');
						return;
					}
					console.warn(' Error \n' + JSON.stringify(responseJson.meta));
					resolve();
					let e = responseJson.meta.errTranslate;
					if (e === null || e === undefined || e === 'null' || e === 'undefined') {
						e = responseJson.meta.errMsg;
					}
					ErrorSnackBar(e, '');
					return;
				}
			})
			.catch((error) => {
				if (error.toString().includes('Error: Request failed with status code 401')) {
					resolve();
					ErrorSnackBar('Api not found!', '');
					return;
				}
				else {
					console.warn(' UploadImage Error By Catch==>\n' + error);
					resolve();
					ErrorSnackBar(error.toString(), '');
					return;
				}
			});
	})

}


function bodyCreationFileUpload(param) {
	return new Promise(async (resolve) => {

		let uri = param.hasOwnProperty("uri");
		let name = param.hasOwnProperty("name");
		let filename = param.hasOwnProperty("filename");
		let type = param.hasOwnProperty("type");
		let Content_Type = param.hasOwnProperty("Content-Type");

		if (!uri) {
			console.error('Please Enter bodyCreationFileUpload uri');
			resolve(false);
			return;
		}
		else if (!name) {
			console.error('Please Enter bodyCreationFileUpload name');
			resolve(false);
			return;
		}
		else if (!filename) {
			console.error('Please Enter bodyCreationFileUpload filename');
			resolve(false);
			return;
		}
		else if (!type) {
			console.error('Please Enter bodyCreationFileUpload type');
			resolve(false);
			return;
		}
		else if (!Content_Type) {
			console.error('Please Enter bodyCreationFileUpload Content-Type');
			resolve(false);
			return;
		}

		uri = param.uri
		name = param.name
		filename = param.filename
		type = param.type
		Content_Type = param["Content-Type"];


		let body = new FormData();
		body.append('file', { uri: uri, name: name, filename: filename, type: type });
		body.append('Content-Type', Content_Type);
		resolve(body);
		return;
	})

}

function appCodeErrorHandle(classes, response) {
	return new Promise(resolve => {
		//Handling Custom ERROR CODE
		if (response.meta.errCode === 1101) {
			resolve(undefined);
			ErrorSnackBar('Api not found!', '');
			return;
		}

		//   **********************************************************************

		if (ExcludeCode.includes(response.meta.errCode)) {
			console.log(classes.toUpperCase() + ' Reposnse \n' + JSON.stringify(response));

			resolve(response);
		} //Exluded code if end
		else {
			console.log(classes.toUpperCase() + ' Error \n' + JSON.stringify(response.meta));
			resolve(undefined);
			let e = Language[response.meta.errTranslate];

			if (e === null || e === undefined || e === 'null' || e === 'undefined') {
				e = response.meta.errMsg;
			}
			ErrorSnackBar(e, '');
		}
	});
}

async function catchErrorHandle(classes, error) {
	return new Promise(resolve => {
		if (error.toString().includes('Error: Request failed with status code 401')) {
			resolve(undefined);
			ErrorSnackBar('Api not found!', '');
			return;
		} else {
			console.log(classes.toUpperCase() + ' Error By Catch==>\n' + error);
			resolve(undefined);
			ErrorSnackBar(error.toString(), '');
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
				url_ = PROD_API_URL + classes
			}
			else {
				url_ = DEV_API_URL + classes
			}
			console.warn('URL==>\n', url_);

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
			ErrorSnackBar('API url is not valid!');
			resolve();
		}
	});
}
