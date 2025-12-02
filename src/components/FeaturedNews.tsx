import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import imgImage12 from "../imports/figma:asset/d44dbcdc5e07d342281c3622a717f64e42e9f645.png";

export function FeaturedNews() {
  const { ref, isInView } = useInView();

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="absolute bg-[#eaecf0] border border-[#dc6803] border-solid h-[507px] left-[181px] rounded-[42px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[791px] w-[1112px] hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.3)] transition-shadow duration-300"
    >
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[44px] left-[48px] not-italic text-[36px] text-black text-nowrap top-[20px] tracking-[-0.72px] whitespace-pre">
        Apel Pagi Rutin
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[52px] not-italic text-[#736c6c] text-[24px] text-nowrap top-[68px] whitespace-pre">
        Selasa 25 November 2025
      </p>

      {/* Image */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="absolute h-[358px] left-[556px] rounded-[45px] top-[75px] w-[526px] overflow-hidden cursor-pointer"
      >
        <img 
          alt="Apel Pagi Rutin" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[45px] size-full hover:scale-105 transition-transform duration-500" 
          src={imgImage12} 
        />
      </motion.div>

      {/* Description */}
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[247px] leading-[24px] left-[52px] not-italic text-[16px] text-black top-[106px] w-[508px]">
        <p className="mb-0">{`Njuahnjuah!!! #TemanPemilih, KPU Kabupaten Pakpak Bharat `}</p>
        <p className="mb-0">{`melaksanakan Apel Pagi Rutin bertempat di Halaman Kantor `}</p>
        <p className="mb-0">KPU Kabupaten Pakpak Bharat dipimpin oleh Posma E.H Situmeang.</p>
        <p className="mb-0">{`Sekretaris KPU Kabupaten Pakpak Bharat pada Senin, 27 Oktober 2025. `}</p>
        <p className="mb-0">{`Dalam arahannya Posma mengingatkan agar seluruh jajaran tetap `}</p>
        <p className="mb-0">{`mempertahankan kedisiplinan dalam bekerja dan juga menyelesaikan `}</p>
        <p className="mb-0">{`tugas tugas dengan tepat waktu. Kegiatan Apel Pagi Rutin diikuti oleh `}</p>
        <p className="mb-0">jajaran KPU Kabupaten Pakpak Bharat. #KPUMelayani #KPUPakpakBharat ....</p>
        <p>&nbsp;</p>
      </div>

      {/* Read More Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute bg-[#ffdddd] border border-[#b8312c] border-solid h-[48px] left-[174px] rounded-[12px] top-[420px] w-[179px] cursor-pointer hover:bg-[#ffc5c5] transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[50%] not-italic text-[#ec9090] text-[16px] text-center text-nowrap top-[12px] translate-x-[-50%] whitespace-pre hover:text-[#d07070] transition-colors duration-300">
          Selengkapnya..
        </p>
      </motion.div>
    </motion.div>
  );
}
