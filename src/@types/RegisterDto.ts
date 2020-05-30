export class RegisterDto {
  private email: string = '';
  private password: string = '';
  private firstName: string = '';
  private lastName: string = '';
  private confirmPassword: string = '';
  private countryName: string = '';

  constructor(data?: RegisterDto) {
    if (data) {
      this.email = data.email;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.password = data.password;
      this.countryName = data.countryName;
      this.confirmPassword = data.confirmPassword;
    }
  }
}