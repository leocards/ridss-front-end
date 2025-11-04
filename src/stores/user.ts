import { ridsUserType } from "@/data/users"
import { create } from "zustand";

type AuthUser = {
    selected: ridsUserType | null,
    setSelected: (user: ridsUserType | null) => void;
}

export const useRidsUserStore = create<AuthUser>((set) => ({
    selected: null,
    setSelected: (user) => set(() => ({
        selected: user
    }))
}))