import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Header />
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear' }} // Set the transition to linear
          className=""
        >
          {children}
          
        </motion.main>
        <Footer />
    </>
  );
}

export default Layout;
