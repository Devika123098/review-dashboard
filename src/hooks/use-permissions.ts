/**
 * usePermissions Hook
 *
 * 📍 src/hooks/use-permissions.ts
 *
 * Client-side hook for checking user permissions and roles.
 * Provides memoized helper functions for granular access control.
 *
 * This is the recommended way to check permissions in client components.
 * For conditional rendering, prefer `<RoleGate>` component instead.
 */

"use client";

import { useMemo } from "react";
import { usePublicUserProfile } from "@/features/auth";

// ─── Return Type ────────────────────────────────────────────

interface UsePermissionsReturn {
  /** The user's roles. Empty array if not authenticated. */
  roles: readonly string[];

  /** Whether user data is still loading. */
  isLoading: boolean;

  /** Whether the user is authenticated. */
  isAuthenticated: boolean;

  /**
   * Check if the user has any of the specified roles.
   *
   * @example
   * ```ts
   * const { hasRole } = usePermissions();
   * if (hasRole([ROLES.ADMIN, ROLES.FELLOW])) { ... }
   * ```
   */
  hasRole: (allowedRoles: readonly string[]) => boolean;
}

export function hasAnyRole(
  userRoles: readonly string[],
  allowedRoles: readonly string[],
): boolean {
  return allowedRoles.some((role) => userRoles.includes(role));
}

// ─── Hook ───────────────────────────────────────────────────

export function usePermissions(): UsePermissionsReturn {
  const { data: user, isLoading } = usePublicUserProfile();

  const roles = useMemo(() => user?.roles ?? [], [user?.roles]);
  const hasRoleFn = useMemo(() => {
    return (allowedRoles: readonly string[]): boolean => {
      if (!user) return false;
      return hasAnyRole(user.roles, allowedRoles);
    };
  }, [user]);

  return {
    roles,
    isLoading,
    isAuthenticated: !!user,
    hasRole: hasRoleFn,
  };
}
