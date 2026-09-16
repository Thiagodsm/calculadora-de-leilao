export const adsenseConfig = {
  enabled: import.meta.env.VITE_ADSENSE_ENABLED === 'true',
  clientId: import.meta.env.VITE_ADSENSE_CLIENT as string ?? '',
};

export const adsenseSlots = {
  home1: import.meta.env.VITE_ADSENSE_SLOT_HOME_1 as string ?? '',
  home2: import.meta.env.VITE_ADSENSE_SLOT_HOME_2 as string ?? '',
  blog:  import.meta.env.VITE_ADSENSE_SLOT_BLOG  as string ?? '',
};
