// get new icons from https://icones.js.org/collection/fluent

export const ICONS = {
  clock: () => import('@/assets/icons/Clock.svg'),
  likedItems: () => import('@/assets/icons/LikedItems.svg'),
  meat: () => import('@/assets/icons/Meat.svg'),
  menu: () => import('@/assets/icons/Menu.svg'),
  myProfile: () => import('@/assets/icons/MyProfile.svg'),
  randomItem: () => import('@/assets/icons/RandomItem.svg'),
} as const

export type AvailableIcon = keyof typeof ICONS
