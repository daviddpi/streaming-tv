import { useMediaQuery } from '@chakra-ui/react'
import { breakpoints } from '@/lib/chakra/theme'

export const useMediaQueries = () => {
    const [isMobile] = useMediaQuery(`(max-width: ${breakpoints.sm})`, {
        ssr: true,
    })

    const [isTablet] = useMediaQuery(`(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg})`, {
        ssr: true,
    })

    const [isTabletVertical] = useMediaQuery(`(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`, {
        ssr: true,
    })

    const [isTabletLandscape] = useMediaQuery(`(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`, {
        ssr: true,
    })

    const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.lg})`, {
        ssr: true,
    })

    return {
        isMobile,
        isTablet,
        isTabletVertical,
        isTabletLandscape,
        isDesktop
    }
}