import { motion } from 'motion/react';
import svgPaths from "../imports/svg-ubzjqwpxg9";
import imgImage5 from "../imports/figma:asset/6d1113389aefd942abd8760701c8cd7ac80e4d7b.png";
import imgImage4 from "../imports/figma:asset/0caab45832549935191e95805ed93357bd02fe62.png";

export function HeroSection() {
  return (
    <div className="relative" style={{ marginTop: '120px' }}>
      {/* Background Image */}
      <div className="absolute h-[633px] left-[169px] pointer-events-none rounded-[20px] top-[31px] w-[1106px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" 
          src={imgImage5} 
        />
        <div aria-hidden="true" className="absolute border border-[#917c1f] border-solid inset-0 rounded-[20px]" />
      </div>

      {/* Overlay */}
      <div className="absolute bg-[rgba(196,196,196,0.35)] border border-[#dc6803] border-solid h-[633px] left-[169px] opacity-[0.99] rounded-[20px] top-[31px] w-[1106px]" />

      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute h-[127px] left-[664px] top-[70px] w-[115px]"
      >
        <img alt="KPU Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </motion.div>

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute font-['Inter:Bold',sans-serif] font-bold h-[164px] leading-[72px] left-[270px] not-italic text-[60px] text-white top-[234px] tracking-[-1.2px] w-[1040px]"
      >
        <p className="mb-0 whitespace-pre-wrap">{`    KOMISI PEMILIHAN UMUM`}</p>
        <p>KABUPATEN PAK PAK BHARAT</p>
      </motion.div>

      {/* Buttons Container */}
      <div className="absolute left-[483px] top-[487px] flex gap-[143px]">
        {/* Lihat Berita Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-[60px] w-[164px] group cursor-pointer"
        >
          <svg className="block size-full transition-all duration-300 group-hover:drop-shadow-lg" fill="none" preserveAspectRatio="none" viewBox="0 0 164 60">
            <path 
              d={svgPaths.p23e9b900} 
              fill="var(--fill-0, #D9D9D9)" 
              stroke="var(--stroke-0, #FFA2A2)"
              className="transition-all duration-300 group-hover:fill-[#FFA2A2]"
            />
          </svg>
          <p className="absolute inset-0 flex items-center justify-center font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#e04d4d] text-[16px] transition-all duration-300 group-hover:text-white">
            LIHAT BERITA
          </p>
        </motion.button>

        {/* Profil Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative h-[60px] w-[164px] group cursor-pointer"
        >
          <svg className="block size-full transition-all duration-300 group-hover:drop-shadow-lg" fill="none" preserveAspectRatio="none" viewBox="0 0 164 60">
            <path 
              d={svgPaths.p23e9b900} 
              fill="var(--fill-0, #D9D9D9)" 
              stroke="var(--stroke-0, #FFA2A2)"
              className="transition-all duration-300 group-hover:fill-[#FFA2A2]"
            />
          </svg>
          <p className="absolute inset-0 flex items-center justify-center font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#db4a4a] text-[16px] transition-all duration-300 group-hover:text-white">
            PROFIL
          </p>
        </motion.button>
      </div>
    </div>
  );
}
