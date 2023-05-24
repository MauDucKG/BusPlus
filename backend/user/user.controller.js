const User = require("./user.model");
const jwt = require("jsonwebtoken");

const {
  getToken,
  COOKIE_OPTIONS,
  getRefreshToken,
} = require("../utils/authenticate");

class UserController {
  async register(req, res, next) {
    User.register(
      new User({ username: req.body.username }),
      req.body.password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          user.name = req.body.name || "";
          const token = getToken({ __id: user._id });
          const refreshToken = getRefreshToken({ __id: user._id });
          user.refreshToken.push({ refreshToken });
          user
            .save()
            .then((result) => {
              res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
              res.send({ success: true, token });
            })
            .catch((error) => {
              res.statusCode = 500;
              res.send(error);
            });
        }
      }
    );
  }

  async login(req, res, next) {
    const token = getToken({ _id: req.user._id });
    const refreshToken = getRefreshToken({ _id: req.user._id });
    User.findById(req.user._id).then(
      (user) => {
        user.refreshToken.push({ refreshToken });
        user
          .save()
          .then((response) => {
            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
            res.send({ success: true, token });
          })
          .catch((error) => {
            res.statusCode = 500;
            res.send(error);
          });
      },
      (err) => next(err)
    );
  }

  async refreshToken(req, res, next) {
    const { signedCookies } = req;
    const { refreshToken } = signedCookies;

    if (refreshToken) {
      try {
        const payload = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET
        );
        const userId = payload._id;
        User.findOne({ _id: userId }).then(
          (user) => {
            if (user) {
              const tokenIndex = user.refreshToken.findIndex(
                (item) => item.refreshToken === refreshToken
              );
              if (tokenIndex === -1) {
                res.statusCode = 401;
                res.send("Unauthorized");
              } else {
                const token = getToken({ _id: userId });
                const newRefreshToken = getRefreshToken({ _id: userId });
                user.refreshToken[tokenIndex] = {
                  refreshToken: newRefreshToken,
                };
                user
                  .save()
                  .then((result) => {
                    res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS);
                    res.send({ success: true, token });
                  })
                  .catch((err) => {
                    res.statusCode = 500;
                    res.send(err);
                  });
              }
            }
          },
          (err) => next(err)
        );
      } catch (err) {
        res.statusCode = 401;
        res.send("Unauthorized");
      }
    } else {
      res.statusCode = 401;
      res.send("Unauthorized");
    }
  }

  async logout(req, res, next) {
    const { signedCookies } = req;
    const { refreshToken } = signedCookies;

    User.findOne({ _id: req.user._id }).then(
      (user) => {
        user.refreshToken = user.refreshToken.filter(
          (item) => item.refreshToken !== refreshToken
        );
        user
          .save()
          .then((result) => {
            res.clearCookie("refreshToken", COOKIE_OPTIONS);
            res.send({ success: true });
          })
          .catch((err) => {
            res.statusCode = 500;
            res.send(err);
          });
      },
      (err) => next(err)
    );
  }

  async updateUserInfo(req, res) {}

  // getAllUser(request, respond) {
  //   userModel
  //     .find()
  //     .exec()
  //     .then((users) => {
  //       respond.status(200).json({
  //         success: true,
  //         message: "Done!",
  //         users: users,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // newuser = async function (req, res) {
  //   const { ten, thongTin, anhDaiDien } = req.body;
  //   const user = new userModel({
  //     ten,
  //     thongTin,
  //     anhDaiDien,
  //   });
  //   try {
  //     await user.save();
  //     res.status(200).send("New user created!");
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // };

  // getUserById = async (req, res) => {
  //   const userId = req.params.id;
  //   try {
  //     const user = await userModel.findById(userId);
  //     if (!user) {
  //       return res.status(404).json({ message: "User not found" });
  //     }
  //     res.json(user);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ message: "Server error" });
  //   }
  // };
}

module.exports = new UserController();
