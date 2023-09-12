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
          <h1 class='text-3xl font-semibold mb-4'>¡Acerca del Taller FRIOSAM!</h1>
          <p class='text-lg leading-relaxed mb-4'>
            Desde el año 2014, nos hemos destacado en el mercado por proporcionar una amplia gama de servicios
            especializados en sistemas de aire acondicionado para vehículos. Nuestro compromiso es garantizar el confort
            y el rendimiento óptimo de su flotilla vehicular.
          </p>
          <ul class='list-disc ml-8'>
            <li class='mb-2'>Instalación y mantenimiento de sistemas de aire acondicionado.</li>
            <li class='mb-2'>Reparación rápida y eficiente de equipos.</li>
            <li class='mb-2'>Sustitución de componentes defectuosos.</li>
            <li class='mb-2'>Ofrecemos contratos de mantenimiento personalizados.</li>
            <li class='mb-2'>Consultas técnicas y visitas de asesoramiento según sus necesidades.</li>
          </ul>
          <p class='mt-4'>
            En nuestro compromiso con la excelencia, trabajamos bajo demanda y también ofrecemos contratos de
            mantenimiento para su flota de vehículos, asegurando así el óptimo funcionamiento de los sistemas de aire
            acondicionado. Estamos listos para brindarle visitas técnicas de consultoría e instalaciones a medida.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default about;
