const { saveCallId, getCallId } = require("./model");

// function to save call id 
exports.saveCallId = async (req, res) => {
  try {
    const { id, signalData } = req.body;
    await saveCallId(id, signalData);
    res.status(200).send(true);
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};

// function to get call id
exports.getCallId = async (req, res) => {
  try {
    const { id } = req.params;
    const code = await getCallId(id);
    res.status(200).send({ code });
  } catch (ex) {
    res.status(400).send(ex.message);
  }
};
