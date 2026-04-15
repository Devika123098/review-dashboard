import type { Metadata } from "next";
import { DashboardContent } from "./dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard | μLearn",
  description: "Your μLearn dashboard",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
