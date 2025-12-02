import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import imgImage11 from "../imports/figma:asset/0fb1e9368ea64a10a6e8eea59f1dd835af59c7d0.png";
import imgImage7 from "../imports/figma:asset/f33860764a8bca54e62d43235f4ffc02317f398f.png";

const newsData = [
  {
    id: 1,
    title: 'UPACARA PERINGATAN HARI\nSUMPAH PEMUDA',
    date: 'Selasa 28 0ktober 2025',
    image: imgImage11,
    type: 'featured',
    left: '209px',
  },
  {
    id: 2,
    title: 'WEBINAR INTERGRASI ALUR \nKERJA MENGGUNAKAN \nKECERDASAN',
    date: 'Jumat 24, oktober 2025',
    image: imgImage7,
    type: 'regular',
    left: '487px',
  },
  {
    id: 3,
    title: 'UPACARA PERINGATAN HARI\nSUMPAH PEMUDA',
    date: 'Selasa 28 0ktober 2025',
    image: imgImage11,
    type: 'featured',
    left: '776px',
  },
  {
    id: 4,
    title: 'WEBINAR INTERGRASI ALUR \nKERJA MENGGUNAKAN \nKECERDASAN',
    date: 'Jumat 24, oktober 2025',
    image: imgImage7,
    type: 'regular',
    left: '1065px',
  },
];

export function NewsGrid() {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      {/* Section Title */}
      <motion.p 
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6 }}
        className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[202px] not-italic text-[24px] text-black text-nowrap top-[1505px] whitespace-pre"
      >
        {`BERITA TERKINI `}
      </motion.p>

      {/* News Cards */}
      <div className="absolute left-0 top-[1563px] w-full">
        {newsData.map((news, index) => (
          <NewsCard 
            key={news.id}
            news={news}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}

interface NewsCardProps {
  news: {
    id: number;
    title: string;
    date: string;
    image: string;
    type: string;
    left: string;
  };
  index: number;
  isInView: boolean;
}

function NewsCard({ news, index, isInView }: NewsCardProps) {
  const isFeatured = news.type === 'featured';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.15)" }}
      className={`absolute ${isFeatured ? 'bg-[#fef3f2]' : 'bg-white'} border border-[#581313] border-solid h-[290px] top-[120px] w-[220px] rounded-lg overflow-hidden cursor-pointer transition-all duration-300`}
      style={{ left: news.left }}
    >
      {/* Image */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`h-[112px] ${isFeatured ? 'left-[29px] top-[19px] w-[167px] rounded-[15px]' : 'left-[54px] top-[19px] w-[112px]'} absolute overflow-hidden`}
      >
        <img 
          alt={news.title} 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-500 hover:scale-110" 
          src={news.image} 
        />
      </motion.div>

      {/* Title */}
      <div className={`absolute font-['Inter:Regular',sans-serif] font-normal ${isFeatured ? 'leading-[20px] left-[7px] text-[14px] top-[160px]' : 'leading-[normal] left-[6px] text-[15px] top-[160px]'} not-italic text-black whitespace-pre w-[206px]`}>
        {news.title.split('\n').map((line, i) => (
          <p key={i} className={i === news.title.split('\n').length - 1 ? '' : 'mb-0'}>{line}</p>
        ))}
      </div>

      {/* Date */}
      <p className={`absolute font-['Inter:Regular',sans-serif] font-normal ${isFeatured ? 'leading-[20px] left-[7px] text-[14px] top-[206px]' : 'leading-[normal] left-[11px] text-[15px] top-[222px]'} not-italic text-[#830909] text-nowrap whitespace-pre`}>
        {news.date}
      </p>

      {/* Read More Button */}
      <div className={`absolute bg-[#eaecf0] border border-[#c76262] border-solid h-[34px] ${isFeatured ? 'left-[54px]' : 'left-[48px]'} opacity-[0.45] rounded-[8px] top-[245px] w-[112px] hover:opacity-70 transition-opacity duration-300`} />
      <p className={`absolute font-['Inter:Regular',sans-serif] font-normal ${isFeatured ? 'leading-[20px] left-[59px] text-[14px] top-[253px]' : 'leading-[20px] left-[59px] text-[14px] top-[253px]'} not-italic text-[#b54545] w-[119px] hover:text-[#8a3a3a] transition-colors duration-300`}>
        Selengkapnya...
      </p>
    </motion.div>
  );
}
