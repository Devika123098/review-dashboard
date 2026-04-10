/**
 * Dashboard Layout
 *
 * 📍 src/app/(dashboard)/layout.tsx
 *
 * Layout for dashboard and protected routes.
 * Includes sidebar navigation, onboarding guard, and RBAC unauthorized handler.
 */

import { type ReactNode, Suspense } from "react";
import { UnauthorizedHandler } from "@/components/auth";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardContent } from "@/components/layout/dashboard-content";
import Loader from "../loading";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <UnauthorizedHandler />
      </Suspense>
      <div className="min-h-screen bg-muted/40 flex justify-between">
        <Sidebar />
        <DashboardContent>{children}</DashboardContent>
      </div>
    </>
  );
}
