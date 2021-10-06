const getUserData = (n) => {
  return new Promise((resolve, reject) => {
    // n === 1 ? resolve('selam') : reject('my error message');

    if (!n) {
      return reject('My error message (getUserData)');
    }

    setTimeout(() => {
      resolve({ name: 'Semih' });
    }, 20);
  });
};

const getFeedData = (n) => {
  return new Promise((resolve, reject) => {
    if (!n) {
      return reject('My error message (getFeedData)');
    }

    setTimeout(() => {
      resolve([{ title: 'Title 1' }, { title: 'Title 2' }]);
    }, 600);
  });
};

// getData(1).then(console.log).catch(console.log);

(async () => {
  try {
    const user = await getUserData(true);
    const feed = await getFeedData(false);

    console.log('user', user);
    console.log('feed', feed);
  } catch (e) {
    console.log(e);
  }
})();
