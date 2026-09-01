import { editActions } from "../types";
import { apiClient } from "./client";

export default {
  createShortUrl: async ({
    title,
    url,
    expiryDate,
  }: {
    title: string;
    url: string;
    expiryDate: string;
  }) => {
    return apiClient<any>("/api/url/create", {
      method: "POST",
      data: JSON.stringify({ title, longUrl: url, expires: expiryDate }),
    });
  },

  fetchAllUrls: async () => {
    return apiClient<any>("/api/url/all", {
      method: "GET",
    });
  },
  fetchUrlById: async (url_id: number) => {
    return apiClient<any>("/api/url/" + url_id, {
      method: "GET",
    });
  },

  editUrlData: async (
    urlId?: number,
    editAction?: editActions,
    dataToUpdate?: any,
  ) => {
    return apiClient<any>("/api/url/" + urlId, {
      method: "PUT",
      data: { editAction: editAction, ...dataToUpdate },
    });
  },

  disableUrl: async (shortcode: string) => {
    return apiClient("/api/url/disable", {
      method: "PUT",
      data: {
        shortcode,
      },
    });
  },

  enableUrl: async (shortcode: string) => {
    return apiClient("/api/url/enable", {
      method: "PUT",
      data: {
        shortcode,
      },
    });
  },

  deleteUrl: async (urlId?: number) => {
    return apiClient("/api/url/" + urlId, {
      method: "DELETE",
    });
  },
};
