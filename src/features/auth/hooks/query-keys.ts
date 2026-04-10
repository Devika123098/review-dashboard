/**
 * Query Keys
 *
 * 📍 src/features/auth/hooks/query-keys.ts
 *
 * Centralized query keys for TanStack Query.
 * Ensures consistent cache invalidation.
 */

export const authKeys = {
  all: ["auth"] as const,
  publicProfile: (muid: string) =>
    [...authKeys.all, "publicProfile", muid] as const,
};
