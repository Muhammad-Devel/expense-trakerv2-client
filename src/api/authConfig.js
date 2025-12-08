
export const authConfig = () => {
  const token = localStorage.getItem("exp_token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};