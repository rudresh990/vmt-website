const urls = [
  'https://voidmatrixtech.com/',
  'https://www.voidmatrixtech.com/services',
  'https://www.voidmatrixtech.com/platforms',
  'https://www.voidmatrixtech.com/company',
  'https://www.voidmatrixtech.com/software-development-cost-estimator',
  'https://www.voidmatrixtech.com/contact',
  'https://www.voidmatrixtech.com/privacy',
  'https://www.voidmatrixtech.com/cookies',
  'https://www.voidmatrixtech.com/accessibility',
  'https://www.voidmatrixtech.com/disclaimer',
  'https://www.voidmatrixtech.com/security',
];

async function submitToIndexNow() {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      host: 'voidmatrixtech.com',
      key: process.env.INDEXNOW_KEY,
      urlList: urls,
    }),
  });

  console.log('Response:', await response.text());
}

submitToIndexNow();
