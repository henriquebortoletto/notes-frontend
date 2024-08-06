import { AxiosError } from "axios";

export class Error {
  static message(error: unknown): string {
    if (error instanceof AxiosError) {
      return error?.response?.data?.message;
    } else {
      return "An unexpected error occurred.";
    }
  }
}
