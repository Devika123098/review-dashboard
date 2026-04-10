/**
 * Role-Based Routing Utility
 *
 * 📍 src/lib/auth/role-routing.ts
 *
 * Returns the correct home dashboard path for a user based on their roles.
 * Used after signup/onboarding to send each user type to their own dashboard.
 *
 * Priority order matters: more privileged roles are checked first so that
 * a user who holds multiple roles (e.g. Admin + Student) always lands on
 * the most appropriate page.
 */

import { MANAGEMENT_ROLES, ROLES } from "./roles";

/**
 * Given a user's roles array (as returned by the backend), return the
 * dashboard home path that should be used for post-login / post-onboarding
 * redirects.
 *
 * Falls back to "/dashboard" for all standard member roles
 * (Student, Mentor, Enabler, Company, Pre Member, etc.).
 */
export function getRoleHomePath(roles: string[]): string {
  // ── Highest-privilege roles first ────────────────────────────
  if (MANAGEMENT_ROLES.some((role) => roles.includes(role))) {
    return "/dashboard/admin";
  }

  if (roles.includes(ROLES.INTERN)) {
    return "/dashboard/intern";
  }

  // ── Default: Student, Mentor, Enabler, Company, Pre Member, etc.
  return "/dashboard";
}
