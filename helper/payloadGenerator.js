function payloadGenerator(user) {
  return {
    userId: user.user_id,
    email: user.email,
  };
}

module.exports = payloadGenerator;
