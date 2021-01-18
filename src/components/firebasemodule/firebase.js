import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const DevConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  const ProdConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
const config = process.env.NODE_ENV === "production" ? ProdConfig : DevConfig;

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    createUser = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    login = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    signOut = () => this.auth.signOut();

    resetPassword = email => {
       return this.auth.sendPasswordResetEmail(email);
    }

    updatePassword = password => {
      return this.auth.currentUser.updatePassword(password);
    }

    user = uid => {
      return this.db.ref(`user/${uid}`);
    } 

    // users2 = () => this.db.ref('user');

    users = () => this.db.ref('user');
}

export default Firebase;
