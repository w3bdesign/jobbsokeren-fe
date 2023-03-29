// export  const fetcher = (...args) => fetch(...args).then(res => res.json())

export const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
    const res = await fetch(...args);
    return res.json();
  }