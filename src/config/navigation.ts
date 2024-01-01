import type { AvailableIcon } from './icons'

type NavigationLink = Readonly<{
  name: string
  path: string
  icon?: AvailableIcon
}>

export const NAVIGATION: Readonly<NavigationLink[]> = [
  { name: 'Polubione', path: '/liked', icon: 'likedItems' },
  { name: 'Dashboard', path: '/', icon: 'dashBoard' },
  { name: 'Losowe danie', path: '/random-meal', icon: 'randomItem' },
  { name: 'Dodaj danie', path: '/add-meal', icon: 'meat' },
] as const

export const DYNAMIC_NAVIGATION = {
  meal: (mealId: string) => `/meal/${mealId}`,
}
