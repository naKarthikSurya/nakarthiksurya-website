import { useEffect } from "react";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

const NotFound = () => {
  const router = useRouter();
  const pathname = router.asPath.split("?")[0];

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found."
        noIndex
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
