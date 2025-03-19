import { motion, AnimatePresence} from "framer-motion";

const Header = () => {
    return (
        <AnimatePresence>
            <motion.header className="header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h1 className="logo">interis</h1>
            </motion.header>
        </AnimatePresence>
    );
};

export default Header;