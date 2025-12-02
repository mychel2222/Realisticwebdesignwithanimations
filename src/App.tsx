import { motion } from 'motion/react';
import svgPaths from "./imports/svg-ubzjqwpxg9";
import imgImage5 from "figma:asset/6d1113389aefd942abd8760701c8cd7ac80e4d7b.png";
import imgImage4 from "figma:asset/0caab45832549935191e95805ed93357bd02fe62.png";
import imgSearch from "figma:asset/a23546083f8167000b25bb4b90c3821f2b1bf1a6.png";
import imgBack from "figma:asset/5db0687702c36b358fbe28945225f47e373f5a09.png";
import imgImage8 from "figma:asset/3ef2fbc1f55894336ec5caeefbde84073ee15eb2.png";
import imgImage9 from "figma:asset/3dd893fedda8a1340fcbce285b0d8c526c97d963.png";
import imgImage10 from "figma:asset/039807dab0366c918379ff7dc45513639fe6fb33.png";
import imgImage11 from "figma:asset/0fb1e9368ea64a10a6e8eea59f1dd835af59c7d0.png";
import imgMenu from "figma:asset/6f8bf91b9d6b535442812b7d2c4c81689209210b.png";
import imgImage12 from "figma:asset/d44dbcdc5e07d342281c3622a717f64e42e9f645.png";
import imgImage7 from "figma:asset/f33860764a8bca54e62d43235f4ffc02317f398f.png";

export default function Desktop() {
  return (
    <div className="bg-gradient-to-b border border-[#f04438] border-solid from-[#fd9b9b] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full to-[#fee4e2]" data-name="Desktop - 1">
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute h-[633px] left-[169px] pointer-events-none rounded-[20px] top-[151px] w-[1106px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgImage5} />
        <div aria-hidden="true" className="absolute border border-[#917c1f] border-solid inset-0 rounded-[20px]" />
      </motion.div>
      <div className="absolute bg-[rgba(196,196,196,0.35)] border border-[#dc6803] border-solid h-[633px] left-[169px] opacity-[0.99] rounded-[20px] top-[151px] w-[1106px]" data-name="image 2" />
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute h-[127px] left-[664px] top-[190px] w-[115px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute font-['Inter:Bold',sans-serif] font-bold h-[164px] leading-[72px] left-[270px] not-italic text-[60px] text-white top-[354px] tracking-[-1.2px] w-[1040px]">
        <p className="mb-0 whitespace-pre-wrap drop-shadow-lg">{`    KOMISI PEMILIHAN UMUM`}</p>
        <p className="drop-shadow-lg">KABUPATEN PAK PAK BHARAT</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute h-[60px] left-[483px] top-[607px] w-[164px] cursor-pointer group">
        <svg className="block size-full transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg" fill="none" preserveAspectRatio="none" viewBox="0 0 164 60">
          <path d={svgPaths.p23e9b900} fill="var(--fill-0, #D9D9D9)" id="Rectangle 1" stroke="var(--stroke-0, #FFA2A2)" className="transition-all duration-300 group-hover:fill-white" />
        </svg>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute h-[60px] left-[790px] top-[607px] w-[164px] cursor-pointer group">
        <svg className="block size-full transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg" fill="none" preserveAspectRatio="none" viewBox="0 0 164 60">
          <path d={svgPaths.p23e9b900} fill="var(--fill-0, #D9D9D9)" id="Rectangle 1" stroke="var(--stroke-0, #FFA2A2)" className="transition-all duration-300 group-hover:fill-white" />
        </svg>
      </motion.div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[511px] not-italic text-[#e04d4d] text-[16px] text-nowrap top-[627px] whitespace-pre cursor-pointer transition-colors duration-300 hover:text-[#c03d3d]">LIHAT BERITA</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[843px] not-italic text-[#db4a4a] text-[16px] text-nowrap top-[627px] whitespace-pre cursor-pointer transition-colors duration-300 hover:text-[#c03d3d]">PROFIL</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[751px] not-italic text-[18px] text-black text-nowrap top-[64px] whitespace-pre cursor-pointer transition-all duration-300 hover:text-[#e04d4d] hover:scale-105">TENTANG</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[903px] not-italic text-[18px] text-black text-nowrap top-[64px] whitespace-pre cursor-pointer transition-all duration-300 hover:text-[#e04d4d] hover:scale-105">BERITA</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[1030px] not-italic text-[18px] text-black text-nowrap top-[64px] whitespace-pre cursor-pointer transition-all duration-300 hover:text-[#e04d4d] hover:scale-105">PUBLIKASI</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[1191px] not-italic text-[18px] text-black text-nowrap top-[64px] whitespace-pre cursor-pointer transition-all duration-300 hover:text-[#e04d4d] hover:scale-105">KONTAK</p>
      <div className="absolute h-[27px] left-[1305px] pointer-events-none rounded-[2px] top-[calc(50%-1165px)] translate-y-[-50%] w-[24px] cursor-pointer transition-transform duration-300 hover:scale-110" data-name="Search">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="" className="absolute h-[82.76%] left-0 max-w-none top-[8.62%] w-full" src={imgSearch} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[2px]" />
      </div>
      <div className="absolute flex h-[11px] items-center justify-center left-[844px] top-[71px] w-[12px] cursor-pointer transition-transform duration-300 hover:translate-y-1" style={{ "--transform-inner-width": "11", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[12px] relative w-[11px]" data-name="Back">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBack} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11px] items-center justify-center left-[1269px] top-[71px] w-[12px] cursor-pointer transition-transform duration-300 hover:translate-y-1" style={{ "--transform-inner-width": "11", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[12px] relative w-[11px]" data-name="Back">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBack} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11px] items-center justify-center left-[1129px] top-[71px] w-[12px] cursor-pointer transition-transform duration-300 hover:translate-y-1" style={{ "--transform-inner-width": "11", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[12px] relative w-[11px]" data-name="Back">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBack} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[11px] items-center justify-center left-[968px] top-[71px] w-[12px] cursor-pointer transition-transform duration-300 hover:translate-y-1" style={{ "--transform-inner-width": "11", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[12px] relative w-[11px]" data-name="Back">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBack} />
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[157px] not-italic text-[24px] text-black text-nowrap top-[53px] whitespace-pre">KPU</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[157px] not-italic text-[20px] text-[rgba(0,0,0,0.83)] text-nowrap top-[82px] whitespace-pre">KAB-PAKPAKBHARAT</p>
      <div className="absolute h-[60px] left-[93px] top-[48px] w-[54px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[202px] not-italic text-[24px] text-black text-nowrap top-[1625px] whitespace-pre">{`BERITA TERKINI `}</motion.p>
      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[178px] not-italic text-[24px] text-black text-nowrap top-[2070px] whitespace-pre">{`     PENGUMUMAN `}</motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute bg-[#fef3f2] h-[220px] left-[198px] top-[2116px] w-[1062px]" />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[151px] leading-[24px] left-[256px] not-italic text-[16px] text-black top-[2199px] w-[237px]">
        <p className="mb-0">{`KPU (Komisi Pemilihan Umum) adalah lembaga nasional, `}</p>
        <p>tetap, dan mandiri yang bertugas menyelenggarakan pemilu di Indonesia.</p>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[256px] not-italic text-[#303030] text-[16px] text-nowrap top-[2143px] whitespace-pre">TENTANG KPU</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[615px] not-italic text-[#303030] text-[16px] text-nowrap top-[2143px] whitespace-pre">LINK CEPAT</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[931px] not-italic text-[#303030] text-[16px] text-nowrap top-[2143px] whitespace-pre">Sosial Media</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[600px] not-italic text-[#2b2b2b] text-[16px] text-nowrap top-[2199px] whitespace-pre cursor-pointer transition-colors duration-300 hover:text-[#e04d4d]">---Link cepat---</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[600px] not-italic text-[#2b2b2b] text-[16px] text-nowrap top-[2229px] whitespace-pre cursor-pointer transition-colors duration-300 hover:text-[#e04d4d]">---Link cepat---</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[600px] not-italic text-[#2b2b2b] text-[16px] text-nowrap top-[2259px] whitespace-pre cursor-pointer transition-colors duration-300 hover:text-[#e04d4d]">---Link cepat---</p>
      <div className="absolute left-[918px] size-[26px] top-[2183px] cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <div className="absolute h-[26px] left-[966px] top-[2183px] w-[30px] cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <div className="absolute flex items-center justify-center left-[1016px] size-[28px] top-[2181px] cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[28px]" data-name="image 10">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute bg-[#fef3f2] border border-[#581313] border-solid h-[290px] left-[209px] top-[1683px] w-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[268px] not-italic text-[#b54545] text-[14px] top-[1936px] w-[119px] cursor-pointer transition-colors duration-300 hover:text-[#e04d4d]">Selengkapnya...</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[535px] not-italic text-[#b54545] text-[14px] top-[1934px] w-[119px] cursor-pointer transition-colors duration-300 hover:text-[#e04d4d]">Selengkapnya...</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[851px] not-italic text-[#b54545] text-[14px] top-[1936px] w-[119px] cursor-pointer transition-colors duration-300 hover:text-[#e04d4d]">Selengkapnya...</p>
      <div className="absolute bg-[#eaecf0] border border-[#c76262] border-solid h-[34px] left-[263px] opacity-[0.45] rounded-[8px] top-[1928px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[216px] not-italic text-[#830909] text-[14px] text-nowrap top-[1889px] whitespace-pre">Selasa 28 0ktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[216px] not-italic text-[14px] text-black text-nowrap top-[1843px] whitespace-pre">
        <p className="mb-0">UPACARA PERINGATAN HARI</p>
        <p className="mb-0">SUMPAH PEMUDA</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute h-[112px] left-[238px] rounded-[15px] top-[1702px] w-[167px] overflow-hidden" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[15px] size-full transition-transform duration-500 hover:scale-110" src={imgImage11} />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bg-[#fef3f2] border border-[#581313] border-solid h-[290px] left-[776px] top-[1683px] w-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer" />
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[830px] opacity-[0.45] rounded-[8px] top-[1928px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[835px] not-italic text-[#b54545] text-[14px] top-[1935px] w-[119px]">Selengkapnya...</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[783px] not-italic text-[#830909] text-[14px] text-nowrap top-[1889px] whitespace-pre">Selasa 28 0ktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[783px] not-italic text-[15px] text-black text-nowrap top-[1843px] whitespace-pre">
        <p className="mb-0">UPACARA PERINGATAN HARI</p>
        <p className="mb-0">SUMPAH PEMUDA</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute h-[112px] left-[805px] rounded-[15px] top-[1702px] w-[167px] overflow-hidden" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[15px] size-full transition-transform duration-500 hover:scale-110" src={imgImage11} />
      </div>
      <div className="absolute h-[38px] left-[1345px] top-[58px] w-[33px] cursor-pointer transition-transform duration-300 hover:scale-110" data-name="Menu">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgMenu} />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute bg-[#eaecf0] border border-[#dc6803] border-solid h-[507px] left-[181px] rounded-[42px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[911px] w-[1112px] transition-shadow duration-300 hover:shadow-[0px_12px_24px_0px_rgba(0,0,0,0.2)]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[44px] left-[229px] not-italic text-[36px] text-black text-nowrap top-[931px] tracking-[-0.72px] whitespace-pre">Apel Pagi Rutin</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[233px] not-italic text-[#736c6c] text-[24px] text-nowrap top-[979px] whitespace-pre">Selasa 25 November 2025</p>
      <div className="absolute h-[358px] left-[737px] rounded-[45px] top-[986px] w-[526px] overflow-hidden" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[45px] size-full transition-transform duration-700 hover:scale-105" src={imgImage12} />
      </div>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium h-[247px] leading-[24px] left-[233px] not-italic text-[16px] text-black top-[1017px] w-[508px]">
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
      <div className="absolute bg-[#ffdddd] border border-[#b8312c] border-solid h-[48px] left-[355px] rounded-[12px] top-[1331px] w-[179px] cursor-pointer transition-all duration-300 hover:bg-[#ffc9c9] hover:shadow-md hover:scale-105" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[444.5px] not-italic text-[#ec9090] text-[16px] text-center text-nowrap top-[1345px] translate-x-[-50%] whitespace-pre cursor-pointer transition-colors duration-300 hover:text-[#e04d4d]">Selengkapnya..</p>
      <div className="absolute bg-white border border-[#5f1010] border-solid h-[290px] left-[487px] top-[1683px] w-[220px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[498px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[493px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[546px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[498px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[493px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[546px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <div className="absolute bg-white border border-[#5f1010] border-solid h-[290px] left-[487px] top-[1683px] w-[220px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[498px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[493px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[546px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[498px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[493px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 15">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[546px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <div className="absolute bg-white border border-[#5f1010] border-solid h-[290px] left-[487px] top-[1683px] w-[220px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[498px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[493px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[546px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[498px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[493px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <div className="absolute bg-[#fef3f2] border border-[#5f1010] border-solid h-[290px] left-[487px] top-[1683px] w-[220px]" />
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[542px] not-italic text-[#b54545] text-[14px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[506px] not-italic text-[#892121] text-[14px] text-nowrap top-[1897px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[20px] left-[506px] not-italic text-[14px] text-black top-[1834px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[541px] top-[1702px] w-[112px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute bg-[#d0d5dd] border border-[#c76262] border-solid h-[34px] left-[535px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <div className="absolute bg-white border border-[#5f1010] border-solid h-[290px] left-[1065px] top-[1683px] w-[220px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1076px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[1071px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1124px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1076px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[1071px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1124px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <div className="absolute bg-white border border-[#5f1010] border-solid h-[290px] left-[1065px] top-[1683px] w-[220px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1076px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[1071px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 22">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1124px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1076px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[1071px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 23">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1124px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <div className="absolute bg-white border border-[#5f1010] border-solid h-[290px] left-[1065px] top-[1683px] w-[220px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1076px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[1071px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1124px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1076px] not-italic text-[#892121] text-[15px] text-nowrap top-[1905px] whitespace-pre">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[1071px] not-italic text-[15px] text-black top-[1843px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1124px] not-italic text-[#b54545] text-[12px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <div className="absolute bg-[#fef3f2] border border-[#5f1010] border-solid h-[290px] left-[1065px] top-[1683px] w-[220px]" />
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 26">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[1076px] not-italic text-[#892121] text-[14px] top-[1899px] w-[159px]">Jumat 24, oktober 2025</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[20px] left-[1082px] not-italic text-[14px] text-black top-[1833px] w-[206px]">
        <p className="mb-0">{`WEBINAR INTERGRASI ALUR `}</p>
        <p className="mb-0">{`KERJA MENGGUNAKAN `}</p>
        <p>KECERDASAN</p>
      </div>
      <div className="absolute h-[114px] left-[1119px] top-[1702px] w-[112px]" data-name="image 27">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[1121px] not-italic text-[#b54545] text-[14px] text-nowrap top-[1936px] whitespace-pre">Selengkapnya...</p>
      <div className="absolute bg-[#d9d9d9] border border-[#c76262] border-solid h-[34px] left-[1113px] opacity-[0.45] rounded-[8px] top-[1927px] w-[112px]" />
    </div>
  );
}
