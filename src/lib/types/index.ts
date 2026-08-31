export type UrlItem = {
  id: number;
  title: string;
  shortCode: string;
  status: "Active" | "Disabled";
  clickCount: number;
  created_at: string;
  expires_at: string;
  active: boolean;
  longUrl: string;
  updated_at: string;
};
