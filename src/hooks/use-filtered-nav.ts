/**
 * useFilteredNav Hook
 *
 * 📍 src/hooks/use-filtered-nav.ts
 *
 * Filters navigation items based on the current user's permissions and roles.
 * Returns items grouped by section, already filtered for visibility.
 *
 * This hook bridges nav-config.ts with the RBAC system:
 *   - Items with `roles` → checked via `usePermissions().hasRole()`
 *   - Items with neither → visible to all authenticated users
 */

"use client";

import { useMemo } from "react";
import { usePermissions } from "@/hooks/use-permissions";
import { NAV_ITEMS, type NavItem } from "@/lib/nav-config";

interface UseFilteredNavReturn {
  /** Main navigation items visible to the current user */
  internItems: NavItem[];
  /** Management/admin items visible to the current user */
  adminItems: NavItem[];
  /** Whether permissions are still loading */
  isLoading: boolean;
}

export function useFilteredNav(): UseFilteredNavReturn {
  const { hasRole, isLoading } = usePermissions();

  const filtered = useMemo(() => {
    const visible = NAV_ITEMS.filter((item) => {
      // No restriction → visible to all authenticated users
      if (!item.roles || item.roles.length === 0) {
        return true;
      }
      // Role-based check
      if (item.roles && item.roles.length > 0) {
        return hasRole(
          typeof item.roles === "string" ? [item.roles] : item.roles,
        );
      }

      return false;
    });

    return {
      internItems: visible.filter((item) => item.section === "intern"),
      adminItems: visible.filter((item) => item.section === "admin"),
    };
  }, [hasRole]);

  return {
    ...filtered,
    isLoading,
  };
}
