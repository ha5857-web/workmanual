// ① Firebase 콘솔 > 프로젝트 설정 > "내 앱"(웹 앱)에서 복사한 값을 아래에 붙여 넣으세요.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// ② 원장님(관리자) 로그인 이메일. firestore.rules 안의 이메일과 같아야 합니다.
export const ADMIN_EMAIL = "ha5857@gmail.com";
