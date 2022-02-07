export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpriationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpriationDate || new Date() > this._tokenExpriationDate) {
      return null;
    }
    return this.token;
  }
}
