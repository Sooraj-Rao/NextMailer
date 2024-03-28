"use client";

import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";
import DashboardSideBar from "../widgets/dashboard/sidebar/dashboard.sidebar";
import { Toaster } from "react-hot-toast";
import { addStripe } from "@/actions/add.stripe";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  const pathname = usePathname();

  const { isLoaded,user } = useUser();

  const isStripeCustomerIdHas = async () => {
    await addStripe();
  };

  if (!isLoaded){
    return null;
  }else{
    if(user){
      isStripeCustomerIdHas();
    }
  } 



  return (
    <NextUIProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "black",
            color: "white",
            borderRadius: "1rem",
          },
        }}
        reverseOrder={false}
      />
      {pathname !== "/dashboard/new-email" &&
      pathname !== "/" &&
      pathname !== "/sign-up" &&
      pathname !== "/subscribe" &&
      pathname !== "/success"  &&
      pathname !== "/sign-in" ? (
        <div className="w-full flex">
          <div className="w[300px]  h-screen overflow-y-scroll">
            <DashboardSideBar />
          </div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  );
};
