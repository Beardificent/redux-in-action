const analytics = (store) => (next) => (action) => {
  if (!action || !action.meta || !action.meta.analytics) {
    return next(action);
  }
  const { event, data } = action.meta.analytics;

  fakeAnalyticsApi(event, data)
    .then((response) => {
      console.log("Recorded: ", event, data);
    })
    .catch((error) => {
      console.error(
        "an error has occurred while sending analytics: ",
        error.toString()
      );
    });

  return next(action);
};

function fakeAnalyticsApi(eventName, data) {
  return new Promise((resolve, reject) => {
    resolve("Success!");
  });
}

export default analytics;
