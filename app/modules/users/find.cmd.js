module.exports = async (input, request) => {

  const search = {};
  if (input.username) {
    search._id = new RegExp(`.*${input.username}.*`,'i');
  }
  if (input.email) {
    search.email = new RegExp(`.*${input.email}.*`,'i');
  }

  return request.reply(
    await request.originalRequest.server.plugins.auth.users.find(search).toArray()
  );
};