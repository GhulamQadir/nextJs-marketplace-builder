"use client";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function CheckOut() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user]);
  return (
    <div>
      <p className="text-3xl font-bold">Checkout page</p>
    </div>
  );
}
export default CheckOut;
