const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to world best series by Abhishek jha");
  } catch (error) {
    console.log();
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to registration page using controllers......!!!");
  } catch (error) {
    res.status(400).send({ msg: "Page not found" });
  }
};
module.exports = { home , register};
