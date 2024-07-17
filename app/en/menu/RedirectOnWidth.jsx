"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectOnWidth = () => {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        setTimeout(() => {
          router.push("/en");
        }, 0);
      }
    };

    // Check initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router]);

  return null;
};

export default RedirectOnWidth;
