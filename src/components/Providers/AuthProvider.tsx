"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import userApis from "@/lib/api/userApis";
import { redirect } from "next/navigation";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, clearUser, setIsAuthenticated, loading, setLoading } =
    useAuthStore();

  useEffect(() => {
    setLoading(true);
    userApis
      .getUserProfile()
      .then((res) => {
        if (res?.username) {
          setIsAuthenticated(true);
          setUser(res);
        }
      })
      .catch((e) => {
        clearUser();
        console.log(e);
        redirect("/login");
      })
      .finally(() => setLoading(false));
  }, [setUser, clearUser]);

  return children;
}
