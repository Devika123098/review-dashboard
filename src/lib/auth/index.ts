/**
 * Auth Library Index
 *
 * 📍 src/lib/auth/index.ts
 *
 * Public API for the auth library.
 * Import from `@/lib/auth` — never from internal files.
 *
 * Note: server.ts is NOT re-exported here because it uses
 * `next/headers` which is only available in Server Components.
 * Import server utilities directly: `import { requireRole } from "@/lib/auth/server"`
 */

// Role-Based Routing
export { getRoleHomePath } from "./role-routing";
// Roles
export {
  ADMIN_ROLES,
  MANAGEMENT_ROLES,
  ROLES,
} from "./roles";
// Route Access (used by middleware)
export {
  findRouteConfig,
  type RouteConfig,
  routeAccessMap,
} from "./route-access";

// Token Store (migrated from src/lib/auth.ts)
export { authStore } from "./token-store";
