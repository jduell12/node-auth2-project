module.exports = {
  isValid,
  loginValid,
};

function isValid(user) {
  return Boolean(user.username && user.password && user.department);
}

function loginValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string",
  );
}
