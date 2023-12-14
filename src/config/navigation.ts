import type { AvailableIcon } from './icons'

type NavigationLink = Readonly<{
  name: string
  path: string
  icon?: AvailableIcon
}>

export const NAVIGATION: Readonly<NavigationLink[]> = [
  { name: 'Polubione', path: '/liked', icon: 'likedItems' },
  { name: 'Menu', path: '/menu', icon: 'menu' },
  { name: 'Losowe danie', path: '/random-meal', icon: 'randomItem' },
  { name: 'Mój profil', path: '/my-profile', icon: 'myProfile' },
] as const

export const DYNAMIC_NAVIGATION = {
  meal: (mealId: string) => `/meal/${mealId}`,
}
