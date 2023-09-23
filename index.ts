export const getData = async (
  endpoint: string,
  headers: Record<string, string>
) => {
  try {
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    const json = await res.json();
    return json;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const postData = async (
  endpoint: string,
  data: any,
  headers: Record<string, string>
) => {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
