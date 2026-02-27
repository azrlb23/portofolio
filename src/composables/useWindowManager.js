import { ref, computed } from 'vue'

// Define the available system windows and their default states
const windows = ref([
    { id: 'about', title: 'About', isOpen: false, zIndex: 10, x: 50, y: 50, width: 800, height: 600, isMaximized: false },
    { id: 'portfolio', title: 'Selected Works', isOpen: false, zIndex: 10, x: 100, y: 100, width: 900, height: 700, isMaximized: false },
    { id: 'contact', title: 'Contact', isOpen: false, zIndex: 10, x: 150, y: 150, width: 600, height: 500, isMaximized: false },
    { id: 'project-detail', title: 'Project Details', isOpen: false, zIndex: 10, x: 200, y: 80, width: 950, height: 750, isMaximized: false }
])

const activeProjectId = ref(null)
let highestZIndex = 10

export function useWindowManager() {

    const activeWindows = computed(() => windows.value.filter(w => w.isOpen))

    const openWindow = (id) => {
        const win = windows.value.find(w => w.id === id)
        if (win) {
            if (!win.isOpen) {
                win.isOpen = true
                const offset = (activeWindows.value.length * 20)
                const isMobile = window.innerWidth < 768
                win.x = isMobile ? (window.innerWidth * 0.05) : (50 + offset)
                win.y = isMobile ? (80 + offset) : (50 + offset)
            }
            focusWindow(id)
        }
    }

    const openProjectWindow = (projectId) => {
        activeProjectId.value = projectId
        const win = windows.value.find(w => w.id === 'project-detail')
        if (win) {
            win.title = `Project ${projectId}`
            win.isOpen = true
            const isMobile = window.innerWidth < 768
            win.x = isMobile ? (window.innerWidth * 0.05) : Math.max(50, window.innerWidth / 2 - win.width / 2 + (Math.random() * 40 - 20))
            win.y = isMobile ? 80 : 50 + (Math.random() * 40)
            focusWindow('project-detail')
        }
    }

    const closeWindow = (id) => {
        const win = windows.value.find(w => w.id === id)
        if (win) {
            win.isOpen = false
            if (id === 'project-detail') {
                activeProjectId.value = null
            }
        }
    }

    const toggleWindow = (id) => {
        const win = windows.value.find(w => w.id === id)
        if (win) {
            if (win.isOpen) {
                // If it's already open, but not focused, focus it instead of closing.
                // If it IS the most focused window, close it.
                if (win.zIndex === highestZIndex) {
                    closeWindow(id)
                } else {
                    focusWindow(id)
                }
            } else {
                openWindow(id)
            }
        }
    }

    const focusWindow = (id) => {
        const win = windows.value.find(w => w.id === id)
        if (win && win.zIndex !== highestZIndex) {
            highestZIndex += 1
            win.zIndex = highestZIndex
        }
    }

    const updateWindowPosition = (id, x, y) => {
        const win = windows.value.find(w => w.id === id)
        if (win && !win.isMaximized) {
            win.x = x
            win.y = y
        }
    }

    const toggleMaximize = (id) => {
        const win = windows.value.find(w => w.id === id)
        if (win) {
            win.isMaximized = !win.isMaximized
            focusWindow(id)
        }
    }

    return {
        windows,
        activeWindows,
        activeProjectId,
        openWindow,
        openProjectWindow,
        closeWindow,
        toggleWindow,
        focusWindow,
        updateWindowPosition,
        toggleMaximize
    }
}
