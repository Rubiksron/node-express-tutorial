const validate = (req, res) => {
  if (!req.body.lesson || req.body.lesson.length < 3) {
    res
      .status(404)
      .send('lesson is required and must be a minimum of 3 characters long.');
    return;
  }
};
module.exports = validate;
