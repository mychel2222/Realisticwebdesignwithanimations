import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import imgImage8 from "../imports/figma:asset/3ef2fbc1f55894336ec5caeefbde84073ee15eb2.png";
import imgImage9 from "../imports/figma:asset/3dd893fedda8a1340fcbce285b0d8c526c97d963.png";
import imgImage10 from "../imports/figma:asset/039807dab0366c918379ff7dc45513639fe6fb33.png";

export function Footer() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      {/* Section Title */}
      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
        className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[178px] not-italic text-[24px] text-black text-nowrap top-[1950px] whitespace-pre"
      >
        {`     PENGUMUMAN `}
      </motion.p>

      {/* Footer Background */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="absolute bg-[#fef3f2] h-[220px] left-[198px] top-[1996px] w-[1062px] rounded-lg shadow-md"
      />

      {/* About KPU Section */}
      <div className="absolute left-[256px] top-[2023px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[#303030] text-[16px] text-nowrap whitespace-pre mb-4">
          TENTANG KPU
        </p>
        <div className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[16px] text-black w-[237px]">
          <p className="mb-0">{`KPU (Komisi Pemilihan Umum) adalah lembaga nasional, `}</p>
          <p>tetap, dan mandiri yang bertugas menyelenggarakan pemilu di Indonesia.</p>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="absolute left-[615px] top-[2023px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[#303030] text-[16px] text-nowrap whitespace-pre mb-4">
          LINK CEPAT
        </p>
        <div className="space-y-2">
          <motion.p 
            whileHover={{ x: 5, color: '#e04d4d' }}
            className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#2b2b2b] text-[16px] text-nowrap whitespace-pre cursor-pointer transition-colors duration-300"
          >
            ---Link cepat---
          </motion.p>
          <motion.p 
            whileHover={{ x: 5, color: '#e04d4d' }}
            className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#2b2b2b] text-[16px] text-nowrap whitespace-pre cursor-pointer transition-colors duration-300"
          >
            ---Link cepat---
          </motion.p>
          <motion.p 
            whileHover={{ x: 5, color: '#e04d4d' }}
            className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#2b2b2b] text-[16px] text-nowrap whitespace-pre cursor-pointer transition-colors duration-300"
          >
            ---Link cepat---
          </motion.p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="absolute left-[931px] top-[2023px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic text-[#303030] text-[16px] text-nowrap whitespace-pre mb-4">
          Sosial Media
        </p>
        <div className="flex gap-4">
          {/* Facebook */}
          <motion.div 
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="size-[26px] cursor-pointer"
          >
            <img alt="Facebook" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-300" src={imgImage8} />
          </motion.div>

          {/* Instagram */}
          <motion.div 
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="h-[26px] w-[30px] cursor-pointer"
          >
            <img alt="Instagram" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-300" src={imgImage9} />
          </motion.div>

          {/* WhatsApp */}
          <motion.div 
            whileHover={{ scale: 1.15, y: -3, rotate: 0 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center cursor-pointer"
          >
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div className="relative size-[28px]">
                <img alt="WhatsApp" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-300" src={imgImage10} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
