import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/Providers/AuthProvider";
import ProtectedPage from "@/components/Providers/ProtectedPage";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <AuthProvider>
        <ProtectedPage>{children}</ProtectedPage>
      </AuthProvider>
    </>
  );
};

export default layout;
