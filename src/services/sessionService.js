import ApiInstance from "./api";

const fetchSession = async () => {
  try {
    const res = await ApiInstance().get("/api/auth/session");
    const session = res?.data;
    return session;
  } catch (error) {
    return error;
  }
};

export default fetchSession;
