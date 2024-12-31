export const fetchHygraphQuery = async (query: string, revalidate?: number) => {
  try {
    const response = await fetch(process.env.HYGRAPH_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      next: {
        revalidate,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data.data, 'olaaaaaaaaa');
    return data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Retorne null para evitar undefined
  }
};
