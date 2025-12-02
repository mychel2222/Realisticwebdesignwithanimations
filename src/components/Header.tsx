import imgImage4 from "../imports/figma:asset/0caab45832549935191e95805ed93357bd02fe62.png";
import imgSearch from "../imports/figma:asset/a23546083f8167000b25bb4b90c3821f2b1bf1a6.png";
import imgBack from "../imports/figma:asset/5db0687702c36b358fbe28945225f47e373f5a09.png";
import imgMenu from "../imports/figma:asset/6f8bf91b9d6b535442812b7d2c4c81689209210b.png";

interface HeaderProps {
  scrolled: boolean;
}

const navItems = [
  { name: 'TENTANG', left: '751px' },
  { name: 'BERITA', left: '903px' },
  { name: 'PUBLIKASI', left: '1030px' },
  { name: 'KONTAK', left: '1191px' },
];

export function Header({ scrolled }: HeaderProps) {
  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fd9b9b]/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
      style={{ height: '120px' }}
    >
      {/* Logo */}
      <div className="absolute h-[60px] left-[93px] top-[48px] w-[54px] transition-transform duration-300 hover:scale-110" data-name="image 1">
        <img alt="KPU Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>

      {/* Title */}
      <div className="absolute left-[157px] top-[53px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic text-[24px] text-black text-nowrap whitespace-pre mb-0">KPU</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic text-[20px] text-[rgba(0,0,0,0.83)] text-nowrap whitespace-pre mb-0">KAB-PAKPAKBHARAT</p>
      </div>

      {/* Navigation */}
      {navItems.map((item, index) => (
        <p 
          key={item.name}
          className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic text-[18px] text-black text-nowrap top-[64px] whitespace-pre cursor-pointer transition-all duration-300 hover:text-[#e04d4d] hover:scale-105"
          style={{ left: item.left }}
        >
          {item.name}
        </p>
      ))}

      {/* Dropdown Icons */}
      {[
        { left: '844px', name: 'TENTANG' },
        { left: '968px', name: 'BERITA' },
        { left: '1129px', name: 'PUBLIKASI' },
        { left: '1269px', name: 'KONTAK' },
      ].map((item) => (
        <div 
          key={item.name}
          className="absolute flex h-[11px] items-center justify-center top-[71px] w-[12px] transition-transform duration-300 hover:rotate-180" 
          style={{ left: item.left, "--transform-inner-width": "11", "--transform-inner-height": "12" } as React.CSSProperties}
        >
          <div className="flex-none rotate-[270deg]">
            <div className="h-[12px] relative w-[11px]" data-name="Back">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgBack} />
            </div>
          </div>
        </div>
      ))}

      {/* Search Icon */}
      <div className="absolute h-[27px] left-[1305px] pointer-events-none rounded-[2px] top-[calc(50%-1165px)] translate-y-[-50%] w-[24px] transition-transform duration-300 hover:scale-110 cursor-pointer" data-name="Search">
        <div className="absolute inset-0 overflow-hidden rounded-[2px]">
          <img alt="Search" className="absolute h-[82.76%] left-0 max-w-none top-[8.62%] w-full" src={imgSearch} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[2px]" />
      </div>

      {/* Menu Icon */}
      <div className="absolute h-[38px] left-[1345px] top-[58px] w-[33px] cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-90" data-name="Menu">
        <img alt="Menu" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgMenu} />
      </div>
    </div>
  );
}
