import { create } from 'zustand';


interface SidebarState {
    sideBarValue: boolean;
    toggleSidebar: () => void;
}

const useSidebarActive = create<SidebarState>((set) => ({
    sideBarValue: true,
    toggleSidebar: () => set((state) => ({ sideBarValue: !state.sideBarValue })),
}));

export default useSidebarActive;