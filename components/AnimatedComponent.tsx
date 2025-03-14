import { motion } from "framer-motion";

function AnimatedComponent(){
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>Smooth Fade-In Animation</h2>
        </motion.div>
    );
}

export default AnimatedComponent;