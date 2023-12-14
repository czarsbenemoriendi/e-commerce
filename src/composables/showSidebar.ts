import { ref } from '#imports'
const isSidebarVisable = ref(false)
export function useShowSidebar() {
  const handleSidebar = () => {
    isSidebarVisable.value = !isSidebarVisable.value
  }
  return { isSidebarVisable, handleSidebar }
}
