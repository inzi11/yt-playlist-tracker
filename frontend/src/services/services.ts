import axios, { AxiosError } from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

type RequestConfig = Omit<AxiosRequestConfig, "url" | "method" | "baseURL">;



class ApiAuth {
  private readonly client: AxiosInstance;


  constructor() {
    this.client = axios.create({ baseURL : "http://localhost:3000/api/" });

    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
  }

  private handleError(error: unknown, fallback = "Request failed"): never {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || error.message || fallback);
    }

    throw new Error(fallback);
  }

  async get<TResponse>(url: string, config?: RequestConfig): Promise<TResponse> {
    try {
      const response = await this.client.get<TResponse>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post<TResponse, TPayload = unknown>(
    url: string,
    payload?: TPayload,
    config?: RequestConfig,
  ): Promise<TResponse> {
    try {
      const response = await this.client.post<TResponse>(url, payload, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put<TResponse, TPayload = unknown>(
    url: string,
    payload?: TPayload,
    config?: RequestConfig,
  ): Promise<TResponse> {
    try {
      const response = await this.client.put<TResponse>(url, payload, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async patch<TResponse, TPayload = unknown>(
    url: string,
    payload?: TPayload,
    config?: RequestConfig,
  ): Promise<TResponse> {
    try {
      const response = await this.client.patch<TResponse>(url, payload, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete<TResponse>(url: string, config?: RequestConfig): Promise<TResponse> {
    try {
      const response = await this.client.delete<TResponse>(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default ApiAuth;
