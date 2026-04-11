/**
 * Unauthorized Page
 *
 * 📍 src/app/(auth)/unauthorized/page.tsx
 *
 * Displayed when user lacks required permissions to access a route.
 */

import { ShieldX } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 rounded-full bg-destructive/10 p-6">
          <ShieldX className="h-16 w-16 text-destructive" />
        </div>

        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Access Denied
        </h1>

        <p className="mb-8 text-muted-foreground">
          You don&apos;t have permission to access this page. This area is
          restricted to interns and management roles only.
        </p>

        <div className="flex gap-4">
          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
