import { motion } from 'framer-motion';
import PagesMetaHead from '../components/PagesMetaHead';

function about() {
  return (
    <div>
      <PagesMetaHead title='About Me' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className='container mx-auto'
      >
        <div class='p-8 rounded-lg  text-ternary-dark dark:text-ternary-light text-lg'>
          <h1 class='text-3xl font-semibold mb-4'>Login</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default about;
