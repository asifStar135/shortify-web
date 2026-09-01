export type UrlItem = {
  id: number;
  title: string;
  shortCode: string;
  visit: number;
  createdAt: string;
  expiresAt: string;
  active: boolean;
  longUrl: string;
  updatedAt: string;
};

export enum editActions {
  enable = "ENABLE",
  disable = "DISABLE",
  title = "TITLE",
  expires = "EXPIRES",
  longUrl = "LONG_URL",
}
