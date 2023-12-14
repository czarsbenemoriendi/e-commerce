// get new icons from https://icones.js.org/collection/fluent

export const ICONS = {
  menu: () => import('@/assets/icons/Menu.svg'),
  likedItems: () => import('@/assets/icons/LikedItems.svg'),
  myProfile: () => import('@/assets/icons/MyProfile.svg'),
  randomItem: () => import('@/assets/icons/RandomItem.svg'),
} as const

export type AvailableIcon = keyof typeof ICONS
