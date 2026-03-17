import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnYjiz8bAE8zK76fuKJRqlR3CvO-1Oea0",
    authDomain: "media-trialweek1.firebaseapp.com",
    projectId: "media-trialweek1",
    storageBucket: "media-trialweek1.firebasestorage.app",
    messagingSenderId: "969235905669",
    appId: "1:969235905669:web:bc4e0fea85b37a44627dec",
    measurementId: "G-M7S3ZH5NKZ"
};

const app = initializeApp(firebaseConfig);
// 💡 딱 이 부분만 수정했습니다! (불필요한 파라미터 제거)
export const db = getFirestore(app);
export const auth = getAuth(app);
