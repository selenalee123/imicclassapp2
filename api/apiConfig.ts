import fetchIntercept from 'fetch-intercept';

export function addParameterToURL(_url: string, param: string) {
  _url += (_url.split('?')[1] ? '&' : '?') + param;
  return _url;
}
//https://gist.github.com/niyazpk/f8ac616f181f6042d1e0
function updateParameterToURL(uri: string, key: string, value: string) {
  // remove the hash part before operating on the uri
  let i = uri.indexOf('#');
  let hash = i === -1 ? '' : uri.substr(i);
  uri = i === -1 ? uri : uri.substr(0, i);

  let re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  let separator = uri.indexOf('?') !== -1 ? '&' : '?';

  if (value === null || value === undefined) {
    // remove key-value pair if value is specifically null or undefined
    uri = uri.replace(new RegExp('([?&]?)' + key + '=[^&]*', 'i'), '');
    if (uri.slice(-1) === '?') {
      uri = uri.slice(0, -1);
    }
    // replace first occurrence of & by ? if no ? is present
    if (uri.indexOf('?') === -1) {
      uri = uri.replace(/&/, '?');
    }
  } else if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    uri = uri + separator + key + '=' + value;
  }
  return uri + hash;
}

export const unregister = fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here
    console.log('request', [url, config]);
    if (url.startsWith('http://localhost')) {
      return [url, config];
    }
    let urlParams = updateParameterToURL(
      url,
      'api_key',
      '65302d9fd57dda3ea2ba86f370ab6b7f',
    );
    let requestConfig = {
      ...config,
      headers: {
        ...(config?.headers ?? {}),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    console.log('request updated', [urlParams, requestConfig]);
    return [urlParams, requestConfig];
  },

  requestError: function (error) {
    console.log('requestError', error);
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the reponse object
    console.log('response', response);
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    console.log('responseError', error);
    return Promise.reject(error);
  },
});
