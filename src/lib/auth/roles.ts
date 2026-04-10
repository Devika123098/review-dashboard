/**
 * Role Constants
 *
 * 📍 src/lib/auth/roles.ts
 *
 * Single source of truth for all role values.
 * These MUST match the backend `RoleType` enum values exactly
 * (see: mulearnbackend/utils/types.py → class RoleType).
 *
 * If a role is renamed on the backend, update it HERE and
 * everything downstream (permissions, route-access, components) updates automatically.
 */

// ─── Role Values ────────────────────────────────────────────
// Each value is the exact string stored in the JWT payload's `roles` array.

export const ROLES = {
  ADMIN: "Admins",
  FELLOW: "Fellow",
  ASSOCIATE: "Associate",
  APPRAISER: "Appraiser",
  INTERN: "Intern",
} as const;

/** Roles with full platform administration access */
export const ADMIN_ROLES = [ROLES.ADMIN] as const;

/** Roles that can perform management tasks (admin-level + fellows) */
export const MANAGEMENT_ROLES = [
  ROLES.ADMIN,
  ROLES.ASSOCIATE,
  ROLES.FELLOW,
] as const;

/** Roles that can view interest group dashboards */
export const INTERN_ROLES = [MANAGEMENT_ROLES, ROLES.INTERN] as const;
