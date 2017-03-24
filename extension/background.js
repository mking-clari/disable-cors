console.log('>>> start');

const filter = {
  urls: ['<all_urls>'],
  types: ['xmlhttprequest'],
};

const requests = {};

chrome.webRequest.onBeforeSendHeaders.addListener(details => {
  const header = details.requestHeaders.find(header => header.name === 'Origin');
  if (!header) {
    console.log('>>> request origin missing', {
      url: details.url,
    });
    return;
  }

  const origin = header.value;
  requests[details.requestId] = origin;
  console.log('>>> request', {
    url: details.url,
    origin,
  });
}, filter, ['requestHeaders']);

chrome.webRequest.onHeadersReceived.addListener(details => {
  const origin = requests[details.requestId];
  if (!origin) {
    console.log('>>> response origin missing', {
      url: details.url,
    });
    return;
  }

  delete requests[details.requestId];
  console.log('>>> response', {
    url: details.url,
    origin,
  });

  return {
    responseHeaders: details.responseHeaders.map(header => {
      if (header.name === 'Access-Control-Allow-Origin') {
        return {
          name: header.name,
          value: origin,
        };
      }

      return header;
    }),
  };
}, filter, ['responseHeaders', 'blocking']);

console.log('>>> added listeners');
