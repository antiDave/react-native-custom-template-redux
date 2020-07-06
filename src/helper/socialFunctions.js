import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import auth, { firebase } from '@react-native-firebase/auth';

const socialFunctions = {
    _configureGoogleSignIn() {
        _configureGoogleSignIn();
    }, //end of _CONFIGURE_GOOGLE_SIGNIN
    fetchFacebookProfile(data) {
        return new Promise(async (resolve) => {
            const res = await fetchFacebookProfile(data);
            resolve(res);
        })//end of PROMISE
    },//end of FETCH_FACEBOOK_PROFILE
    signInGoogle() {
        return new Promise(async (resolve) => {
            try {
                await GoogleSignin.hasPlayServices();
                await _configureGoogleSignIn();
                const userInfo = await GoogleSignin.signIn();
                // this.setState({ userInfo, error: null });
                const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.serverAuthCode);

                await firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(async res => {
                        resolve(res);

                    })
                    .catch(err => {
                        if (err.toString().includes('auth/account-exists-with-different-credential]')) {
                            resolve(false);
                        } else if (err.toString().includes('auth/network-request-failed')) {
                            resolve(false);
                        } else {
                            console.warn('signInWithCredential_ error', err);
                            resolve(false);
                        }

                    });

                //
            } catch (error) {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // sign in was cancelled
                    console.warn('cancelled');
                    resolve(false);
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    // operation in progress already

                    console.warn('in progress');
                    resolve(false);
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    console.warn('play services not available or outdated');
                    resolve(false);

                } else {
                    console.warn('Something went wrong', error.toString());
                    resolve(false);
                }

            }
        })//end of PROMISE
    },//end of SIGNIN_GOOGLE
    signInFacebook() {
        return new Promise((resolve) => {
            LoginManager.logInWithPermissions(["public_profile", "email"]).then(
                function (result) {
                    if (result.isCancelled) {
                        console.log("Login cancelled");
                        resolve(false);
                    } else {
                        AccessToken.getCurrentAccessToken()
                            .then(async data => {
                                let profile = await fetchFacebookProfile(data);
                                resolve(profile);
                            })
                            .catch(error => {
                                console.log(error);
                                resolve(false);
                            });
                    }
                },
                function (error) {
                    console.log("Login fail with error: " + error);
                    resolve(false);
                }
            );
        })//end of PROMISE

    },//end of SIGNIN_FACEBOOK
    getFirebaseCurrentUser() {
        return new Promise(async (resolve,) => {

            const res = await getFirebaseCurrentUser();
            resolve(res);
        })//end of PROMISE
    },//end of GET_FIREBASE_CURRENT_USER
    facebookLogout() {
        return new Promise(async (resolve) => {
            let data = await AccessToken.getCurrentAccessToken();
            if (data) {
                let accessToken = data.accessToken;
                let logout = new GraphRequest(
                    "me/permissions/",
                    {
                        accessToken: accessToken,
                        httpMethod: "DELETE"
                    },
                    (error, result) => {
                        if (error) {
                            console.log("Error fetching data: " + JSON.stringify(error));
                            resolve(false);
                        } else {
                            LoginManager.logOut();
                            resolve(true);
                        }
                    }
                );
                new GraphRequestManager().addRequest(logout).start();
            }
            else {
                resolve(false);
                alert("Already Logout!");
            }
        })//end of PROMISE

    },//end of FACEBOOK_LOGOUT
    googleLogout() {
        return new Promise(async (resolve) => {
            const user = await getFirebaseCurrentUser();
            console.warn('GOOGLE USER', user);


            if (user) {
                firebase.auth().signOut().then(async () => {
                    console.warn('GOOGLE SIGNOUT1');
                    await GoogleSignin.revokeAccess().then(() => { }).catch((error) => { console.warn('REVOKE CATCH ERROR\n', error); });
                    console.warn('GOOGLE SIGNOUT1 revokeAccess');
                    await GoogleSignin.signOut().then(() => { }).catch((error) => { console.warn('SIGNOUT CATCH ERROR\n', error); });
                    console.warn('GOOGLE SIGNOUT1 signOut');
                    console.log('User signed out!');
                    resolve(true);
                }).catch((error) => {
                    resolve(false);
                });
            }
            else {
                resolve(false);

                alert("Already Logout!");
            }
        })//end of PROMISE
    }//end of GOOGLE_LOGOUT
};//end of SOCAIL_FUNCTIONS

export default socialFunctions;


const fetchFacebookProfile = async (data) => {
    return new Promise((resolve) => {
        let accessToken = data.accessToken;
        let request = new GraphRequest("/me", {
            accessToken: accessToken, parameters: {
                fields: {
                    string: "email,name,first_name,middle_name,last_name,picture.type(large)"
                }
            }
        },
            // null,
            (error, result) => {
                if (result) {
                    let profile = result;
                    // profile.avatar = `https://graph.facebook.com/${result.id}/picture?type=large`;
                    resolve(profile);
                } else {
                    resolve(false);
                }
            }
        );

        new GraphRequestManager().addRequest(request).start();
    })//end of PROMISE
}

const getFirebaseCurrentUser = () => {
    return new Promise((resolve,) => {
        auth().onAuthStateChanged(function (user) {
            resolve(user);
        })
    })
}

const _configureGoogleSignIn = () => {
    GoogleSignin.configure({
        //IOS CLIENT ID FROM FIREBASE
        iosClientId: '802999887589-ij24l3ki4v6akipregbpm6k3g26q2fd3.apps.googleusercontent.com',
        //WEB CLIENT ID FROM FIREBASE
        webClientId: '802999887589-pq45djhq2lqquji74lkqs120t0vj1n1v.apps.googleusercontent.com',
        offlineAccess: false,
    });
}