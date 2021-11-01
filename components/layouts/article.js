import Head from 'next/head'
import { motion } from 'framer-motion'
import { GridItemStyle } from '@/components/grid-item'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => (
    <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3, type: 'easeInOut' }}
        style={{ position: 'relative' }}
    >
    <>
        { title && (
            <Head>
                <title>{title} - Andy Jung</title>
            </Head>
        )}
        {children}
        <GridItemStyle />
    </>
    </motion.article>
)

export default Layout 