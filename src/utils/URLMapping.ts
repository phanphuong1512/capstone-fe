const API_URL =
  (import.meta.env.VITE_API_URL as string) || "http://localhost:8082";

  const URLMapping = {
    LOGIN: "/login",
    REGISTER: "/register",
    VEFIRY: "/active-account",
    OAUTH_GOOGLE: `${API_URL}/auth/google`,
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",

    LIST_SUBJECT:"/subjects/list",
    SUBJECT_DETAIL:"/subjects/detail",
    SLOT_SKILL:"/slots"
  }
export default URLMapping;

export { API_URL };