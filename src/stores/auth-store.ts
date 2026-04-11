/**
 * Auth Store
 *
 * 📍 src/stores/auth-store.ts
 *
 * Global auth state using Zustand with persist.
 * Stores muid, roles, college_code, profile_pic from public profile.
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProfileData {
  fullName: string;
  muid: string;
  roles: string[];
  collegeCode: string | null;
  profilePic: string | null;
}

interface AuthState {
  userProfile: UserProfileData | null;
  setUserProfile: (profile: UserProfileData | null) => void;
  resetAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userProfile: null,
      setUserProfile: (profile) => set({ userProfile: profile }),
      resetAuth: () => set({ userProfile: null }),
    }),
    {
      name: "intern-user",
    },
  ),
);
