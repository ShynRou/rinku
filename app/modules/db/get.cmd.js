const cmd = {
  id: 'get',
  handler: async (input, request) => {
    let list = await request.docs.find({owner: request.user});
    return request.reply({
      data: list,
      text: list,
      speech: `Your db is ${list.length} entries long.`,
    });
  }
};

module.exports = cmd;