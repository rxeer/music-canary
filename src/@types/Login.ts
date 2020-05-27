export class LoginDto {
  private email: string = '';
  private password: string = '';

  constructor(data?: LoginDto) {
    if (data) {
      this.email = data.email;
      this.password = data.password;
    }
  }
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
}
