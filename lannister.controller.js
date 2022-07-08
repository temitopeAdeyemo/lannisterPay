const LannisterUser = require("./lannister.model");
const uuid = require("uuid");
// console.log(uuid)
// console.log(LannisterUser);

const share = async (req, res, next) => {
  try {
    const { amount, customerEmail, splitInfo, splitType, splitValue } =
      req.body;

    // const payLoad = {
    //   id: "1308",
    //   amount: 12580,
    //   currency: "NGN",
    //   customerEmail: " hgvdchgdhgs@gmail.com",
    //   splitInfo: [
    //     {
    //       splitType: "PERCENTAGE",
    //       splitValue: 7,
    //       splitEntityId: "LAN4422",
    //     },
    //     {
    //       splitType: "FLAT",
    //       splitValue: 450,
    //       splitEntityId: "LAN4422",
    //     },
    //     {
    //       splitType: "PERCENTAGE",
    //       splitValue: 5,
    //       splitEntityId: "LAN4422",
    //     },
    //     {
    //       splitType: "RATIO",
    //       splitValue: 4,
    //       splitEntityId: "LAN4422",
    //     },
    //     {
    //       splitType: "RATIO",
    //       splitValue: 3,
    //       splitEntityId: "LAN4422",
    //     },
    //   ],
    // };
    // const splitt = payload.splitInfo;
    splitInfo.forEach((info) => {
      const flatArray = [];
      const percentageArray = [];
      const ratioArray = [];
      let availableBalance;
      if (info.splitType == "FLAT") {
        flatArray.push(info);
      } else if (info.splitType == "PERCENTAGE") {
        percentageArray.push(info);
      } else if (info.splitType == "RATIO") {
        ratioArray.push(info);
      }
    });
    const newShare = new LannisterUser({
      amount,
      customerEmail,
      splitInfo: [
        {
          splitType,
          splitValue,
          splitEntityId: uuid.v4(),
        },
      ],
    });
    await newShare.save();
    return res.status(200).json({
      newShare,
    });
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = {share}