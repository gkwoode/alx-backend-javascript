const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const { protocol, name } = endpoint;
  const endpointKey = `${protocol}-${name}`;

  let count = weakMap.get(endpointKey) || 0;
  count++;
  weakMap.set(endpointKey, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Your API query logic goes here
  // ...

  return `Querying ${protocol}-${name}`;
}

export { weakMap, queryAPI };