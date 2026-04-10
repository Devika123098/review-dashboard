/**
 * Route Access Map
 *
 * src/lib/auth/route-access.ts
 *
 * Maps URL paths to the roles required to access them.
 * Used by Next.js middleware for edge-level route protection.
 *
 * Rules:
 * - Empty `roles` array = any authenticated user can access
 * - Non-empty `roles` array = user must have at least one matching role
 * - Routes not in this map but under /dashboard = any authenticated user
 * - More specific routes take precedence over general ones
 */

import { ROLES } from "./roles";

// ─── Types ──────────────────────────────────────────────────

export interface RouteConfig {
  /** Roles allowed to access this route. Empty = any authenticated user. */
  roles: readonly string[];
}

// ─── Route Access Map ──────────────────────────────────────

export const routeAccessMap: Record<string, RouteConfig> = {
  // ── Public Dashboard (any authenticated user) ────────────
  "/dashboard": { roles: [] },
  "/dashboard/intern": { roles: [ROLES.INTERN] },

  // ── Admin Routes ─────────────────────────────────────────
  "/dashboard/admin": {
    roles: [ROLES.ADMIN],
  },
};

// ─── Route Matching ─────────────────────────────────────────

/**
 * Find the most specific route config that matches the given pathname.
 * Uses longest-prefix matching so `/dashboard/admin/users` matches
 * `/dashboard/admin` if there's no more specific entry.
 *
 * @returns The matching RouteConfig, or `null` if no match found.
 */
export function findRouteConfig(pathname: string): RouteConfig | null {
  // 1. Exact match
  if (routeAccessMap[pathname]) {
    return routeAccessMap[pathname];
  }

  // 2. Longest prefix match
  const matchingRoutes = Object.keys(routeAccessMap)
    .filter((route) => pathname.startsWith(`${route}/`) || pathname === route)
    .sort((a, b) => b.length - a.length); // longest first

  return matchingRoutes.length > 0 ? routeAccessMap[matchingRoutes[0]] : null;
}
