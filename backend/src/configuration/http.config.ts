import Axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

export class HttpService {
  private httpClient: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.httpClient = Axios.create(config);
    this.configInterceptors();
  }

  private configInterceptors(): void {
    this.httpClient.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.httpClient.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error: AxiosError) {
        HttpService.handleErrorResponse(error);
        return Promise.reject(error);
      }
    );
  }

  private static handleErrorResponse(error: AxiosError): void {
    if (error.response) {
      console.log({
        context: 'HttpService-Error',
        data: {
          method: error.config?.method,
          url: error.config?.url,
          response: {
            status: error.response.status,
            data: error.response.data,
            headers: error.response.headers
          }
        }
      });
    } else if (error.request) {
      console.log({ context: 'HttpService-Error', request: 'error.request' });
    } else {
      console.log({ context: 'HttpService-Error', message: error.message });
    }
  }

  public HttpClient(): AxiosInstance {
    return this.httpClient;
  }
}
