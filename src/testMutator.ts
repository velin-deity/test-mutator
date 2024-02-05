import Axios, { AxiosRequestConfig } from 'axios';

export const useTestMutator = <TData>(): ((
  config: AxiosRequestConfig
) => Promise<TData>) => {
  return async (config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();

    return Axios({
      ...config,
      baseURL: import.meta.env?.BASE_URL,
      cancelToken: source.token,
      signal: config?.signal,
      data: config?.data ? JSON.stringify(config.data) : undefined,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(({ data }) => data)
      .catch((e) => {
        throw e;
      });
  };
};
