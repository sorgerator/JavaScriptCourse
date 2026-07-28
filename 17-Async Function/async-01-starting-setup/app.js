const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigation.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts,
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  let posData;
  let timerData;
  try {
    const posData = await getPosition();
    const timerData = await setTimer(2000);
  } catch (error) {
    // console.log(timerData, posData);
    console.log(error);
  }

  console.log(timerData, posData);
  // getPosition;
  //   .then((posData) => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  // return "on we go..."
  //   })
  //   .then((data) => {
  //     console.log(data, positionData);
  //   });
  // setTimer(1000).then(() => {
  //   console.log("Timer done!");
  // });
  // console.log("Getting position...");
  // console.log("Clicked!");
  // navigator.geolocation.getCurrentPosition(
  // (posData) => {
  // setTimer(2000).then((data) => {
  // console.log(data, posData);
  // });
  // setTimeout(() => {
  //   console.log(posData);
  // }, 2000);
  // },
  // (error) => {
  //  console.log(error);
  // },
  // );

  // setTimer(1000).then(() => {
  // console.log("Timer done!");
  // });
  setTimeout(() => {
    console.log("Timer done!");
  }, 0);

  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

Promise.race([getPosition(), setTimer(1000)]).then((data) => {
  console.log(data);
});

Promise.all([getPosition(), setTimer()]).then((promiseData) => {
  console.log(promiseData);
});

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
