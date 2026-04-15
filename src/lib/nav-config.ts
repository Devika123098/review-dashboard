/**
 * Navigation Configuration
 *
 * 📍 src/lib/nav-config.ts
 *
 * Single source of truth for all sidebar navigation items.
 * Each item declares its visibility rules via `permission` or `roles`.
 * Items without either are visible to all authenticated users.
 *
 * To add a new nav item:
 *   1. Add an entry here with the appropriate section and permission/roles
 *   2. Done — the sidebar picks it up automatically
 */

import type { LucideIcon } from "lucide-react";
import { Cpu, File, Home, Link } from "lucide-react";
import { MANAGEMENT_ROLES, ROLES } from "@/lib/auth/roles";

// ─── Types ──────────────────────────────────────────────────

export type NavSection = "intern" | "admin";

export interface NavItem {
  /** Unique identifier for the item */
  id: string;
  /** Display label */
  title: string;
  /** Route path */
  href: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Section this item belongs to */
  section: NavSection;
  /**
   * Direct role check (fallback when no single permission fits).
   * If set, item is visible to users who have any of these roles.
   */
  roles?: string | readonly string[];
}

// ─── Navigation Items ───────────────────────────────────────

export const WEEKLY_REVIEW_ROLES = [
  ...ROLES.INTERN,
  ...MANAGEMENT_ROLES,
] as const;

export const NAV_ITEMS: readonly NavItem[] = [
  // ── Main Section (all authenticated users) ────────────────
  {
    id: "home",
    title: "Home",
    href: "/dashboard",
    icon: Home,
    section: "intern",
  },
  {
    id: "intern-form",
    title: "Weekly Review Form",
    href: "/dashboard/intern/weekly-review",
    icon: Link,
    section: "intern",
  },
  // ── Management Section (role-gated) ───────────────────────
  {
    id: "weekly-report-generator",
    title: "Weekly Report Generator",
    href: "/dashboard/admin/weekly-report-generator",
    icon: Cpu,
    section: "admin",
    roles: MANAGEMENT_ROLES,
  },
  {
    id: "event-report",
    title: "Event Report",
    href: "/dashboard/admin/event-report",
    icon: File,
    section: "admin",
    roles: MANAGEMENT_ROLES,
  },
] as const;
