import webPush from "web-push";
export const sendNotification = async (req, res, next, notification) => {
  const subscription = req.body;
  res.status(201).json({});
  webPush.sendNotification(subscription, notification).catch((err) => {
    console.log(err);
  });
};
