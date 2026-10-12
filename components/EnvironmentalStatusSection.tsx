import React, { useState } from 'react';
import {
  BEFORE_AFTER_CASES,
  GALLERY_ITEMS,
  SOLUTIONS_BY_LEVEL,
  AUTHORITATIVE_SOURCES,
  GENERAL_PLASTIC_METRICS,
  GENERAL_PLASTIC_ASPECTS,
  PLASTIC_HARMS_DATA,
  DECOMPOSITION_TIMELINE,
  MICROPLASTIC_BODY_IMPACTS
} from '../data/environmentalData';
import { SolutionLevel, GalleryItem } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import LightboxModal from './LightboxModal';
import {
  AlertTriangle,
  Globe2,
  TrendingDown,
  Fish,
  Layers,
  ShieldCheck,
  UserCheck,
  Building,
  Landmark,
  Maximize2,
  CheckCircle,
  ExternalLink,
  Info,
  Sparkles,
  Droplet,
  MapPin,
  ArrowLeftRight,
  Newspaper,
  Skull,
  Clock,
  HeartPulse,
  Activity,
  AlertOctagon,
  Waves,
  Flame,
  ShoppingBag,
  Box,
  Wine,
  Zap,
  Coffee,
  ShieldAlert,
  Wind,
  Brain,
  Baby,
  BarChart2,
  Check
} from 'lucide-react';

const EnvironmentalStatusSection: React.FC = () => {
  const [activeSolutionTab, setActiveSolutionTab] = useState<SolutionLevel>('individual');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [galleryCategory, setGalleryCategory] = useState<string>('Tất cả');
  const [isGalleryReversed, setIsGalleryReversed] = useState<boolean>(false);

  // States for General Status & Harms interactive features
  const [activeHarmTab, setActiveHarmTab] = useState<'all' | 'suc_khoe' | 'sinh_thai' | 'moi_truong' | 'do_thi_kinh_te'>('all');
  const [activeTimelineItemName, setActiveTimelineItemName] = useState<string>('Túi nilon siêu mỏng (HDPE/LDPE)');
  const [selectedBodyPartName, setSelectedBodyPartName] = useState<string>('Não bộ & Thần kinh');

  const categories = ['Tất cả', 'Đại dương', 'Đô thị', 'Kênh rạch', 'Sinh thái'];

  const baseGallery = isGalleryReversed ? [...GALLERY_ITEMS].reverse() : GALLERY_ITEMS;
  const filteredGallery =
    galleryCategory === 'Tất cả'
      ? baseGallery
      : baseGallery.filter((item) => item.category === galleryCategory);

  const filteredHarms = activeHarmTab === 'all'
    ? PLASTIC_HARMS_DATA
    : PLASTIC_HARMS_DATA.filter((item) => item.category === activeHarmTab);

  const selectedTimelineData = DECOMPOSITION_TIMELINE.find(
    (item) => item.name === activeTimelineItemName
  ) || DECOMPOSITION_TIMELINE[0];

  const selectedBodyPartData = MICROPLASTIC_BODY_IMPACTS.find(
    (item) => item.part === selectedBodyPartName
  ) || MICROPLASTIC_BODY_IMPACTS[0];

  const solutionTabs = [
    {
      id: 'individual' as SolutionLevel,
      label: 'Cấp độ Cá nhân (3R)',
      sub: 'Reduce · Reuse · Recycle',
      icon: UserCheck,
      color: 'text-emerald-400',
      activeBg: 'bg-emerald-600',
    },
    {
      id: 'business' as SolutionLevel,
      label: 'Cấp độ Doanh nghiệp',
      sub: 'Kinh tế tuần hoàn & Bao bì sinh học',
      icon: Building,
      color: 'text-teal-400',
      activeBg: 'bg-teal-600',
    },
    {
      id: 'government' as SolutionLevel,
      label: 'Cấp độ Chính quyền & Dân cư',
      sub: 'Chính sách thuế & Phân loại tại nguồn',
      icon: Landmark,
      color: 'text-cyan-400',
      activeBg: 'bg-cyan-600',
    },
  ];

  return (
    <section id="status" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-rose-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================== */}
        {/* TIÊU ĐỀ CHÍNH CỦA PHẦN 2 */}
        {/* ============================================================== */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>PHẦN 2 · THỰC TRẠNG &amp; NGUY CƠ SINH THÁI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Thực trạng Ô nhiễm Rác thải Nhựa &amp; Nguy cơ Sinh thái
          </h2>
          <p className="text-zinc-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            Nhựa là một trong những phát minh vật liệu phổ biến nhất của nhân loại, nhưng tính trơ hóa học và vòng đời phân hủy kéo dài hàng thế kỷ đang biến chúng thành cuộc khủng hoảng sinh thái nghiêm trọng nhất thế kỷ 21 đối với sức khỏe con người, môi trường và đại dương.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MỤC 2.1: THỰC TRẠNG CHUNG VỀ Ô NHIỄM RÁC THẢI NHỰA */}
        {/* ============================================================== */}
        <div className="mb-24">
          <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800">
              <div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-2">
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Mục 2.1 · Thực trạng chung</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Bức tranh Toàn cảnh Ô nhiễm Rác thải Nhựa tại Việt Nam &amp; Thế giới
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                Tổng hợp báo cáo thống kê chính thống từ UNEP, Ngân hàng Thế giới (World Bank), Bộ Tài nguyên &amp; Môi trường và các cơ quan truyền thông báo chí.
              </p>
            </div>

            {/* 6 Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {GENERAL_PLASTIC_METRICS.map((metric) => {
                const colorMap = {
                  rose: 'from-rose-950/40 border-rose-500/30 hover:border-rose-500/60 text-rose-400',
                  amber: 'from-amber-950/40 border-amber-500/30 hover:border-amber-500/60 text-amber-400',
                  emerald: 'from-emerald-950/40 border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400',
                  cyan: 'from-cyan-950/40 border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400',
                  purple: 'from-purple-950/40 border-purple-500/30 hover:border-purple-500/60 text-purple-400'
                };
                const style = colorMap[metric.colorScheme] || colorMap.emerald;

                return (
                  <div
                    key={metric.id}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${style} via-zinc-950 to-zinc-950 border transition-all duration-300 shadow-lg hover:shadow-xl group flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-2">
                        <span className="font-semibold text-zinc-300">{metric.label}</span>
                        <span className="font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">{metric.trend}</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-0.5">
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-zinc-400 mb-3">
                        {metric.unit}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                        {metric.sublabel}
                      </p>
                    </div>

                    <a
                      href={metric.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 hover:text-white transition-colors group/link"
                      title={`Xem nguồn báo cáo: ${metric.source}`}
                    >
                      <span className="truncate max-w-[200px]">{metric.source}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-link:text-emerald-400 shrink-0 ml-1" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* 4 In-Depth Aspect Cards (Grid 2x2) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {GENERAL_PLASTIC_ASPECTS.map((aspect) => {
                const alertStyle = aspect.alertLevel === 'nguy_cap'
                  ? 'border-rose-500/40 bg-rose-950/20 text-rose-300'
                  : aspect.alertLevel === 'canh_bao'
                  ? 'border-amber-500/40 bg-amber-950/20 text-amber-300'
                  : 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300';

                return (
                  <div
                    key={aspect.id}
                    className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${alertStyle}`}>
                          {aspect.alertLevel === 'nguy_cap' ? 'Nguy cấp cao' : aspect.alertLevel === 'canh_bao' ? 'Cảnh báo đỏ' : 'Nghiêm trọng'}
                        </span>
                        <div className="text-right">
                          <span className="text-xl sm:text-2xl font-black text-white">{aspect.highlightNumber}</span>
                          <div className="text-[10px] text-zinc-400 font-medium">{aspect.highlightLabel}</div>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-1.5 leading-snug">
                        {aspect.title}
                      </h4>
                      <p className="text-xs text-emerald-400/90 font-medium mb-3">
                        {aspect.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                        {aspect.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {aspect.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {aspect.quoteSource && (
                      <a
                        href={aspect.quoteSourceUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between text-xs text-zinc-400 hover:text-white transition-all group"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Newspaper className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                          <span className="truncate">{aspect.quoteSource}</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-rose-400 shrink-0 ml-2" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MỤC 2.2: TÁC HẠI TOÀN DIỆN CỦA RÁC THẢI NHỰA */}
        {/* ============================================================== */}
        <div className="mb-24">
          <div className="p-6 md:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800">
              <div>
                <span className="text-xs font-bold text-rose-400 bg-rose-950/70 border border-rose-500/30 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-2">
                  <Skull className="w-3.5 h-3.5" />
                  <span>Mục 2.2 · Tác hại &amp; Hiểm họa sinh thái</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Tác hại Toàn diện của Rác thải Nhựa đối với Sự sống &amp; Môi trường
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
                Phân tích 4 trụ cột hệ lụy: Sức khỏe con người &amp; vi nhựa, Sinh vật biển, Thoái hóa đất &amp; biến đổi khí hậu, cùng Tê liệt hạ tầng đô thị.
              </p>
            </div>

            {/* Harm Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800 max-w-fit">
              <button
                onClick={() => setActiveHarmTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeHarmTab === 'all'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Tất cả tác hại (4 Trụ cột)
              </button>
              <button
                onClick={() => setActiveHarmTab('suc_khoe')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeHarmTab === 'suc_khoe'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Sức khỏe &amp; Vi nhựa</span>
              </button>
              <button
                onClick={() => setActiveHarmTab('sinh_thai')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeHarmTab === 'sinh_thai'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Fish className="w-3.5 h-3.5" />
                <span>Sinh thái &amp; Đại dương</span>
              </button>
              <button
                onClick={() => setActiveHarmTab('moi_truong')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeHarmTab === 'moi_truong'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Đất, Nước &amp; Khí hậu</span>
              </button>
              <button
                onClick={() => setActiveHarmTab('do_thi_kinh_te')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeHarmTab === 'do_thi_kinh_te'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>Hạ tầng &amp; Đô thị</span>
              </button>
            </div>

            {/* Harm Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {filteredHarms.map((harm) => (
                <div
                  key={harm.id}
                  className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-rose-500/50 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-semibold text-rose-400 bg-rose-950/60 border border-rose-500/30 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                        <AlertOctagon className="w-3.5 h-3.5" />
                        <span>{harm.categoryLabel}</span>
                      </span>
                      <span className="text-[11px] font-bold text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded-md border border-zinc-800">
                        {harm.severity}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                      {harm.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 font-medium">
                      {harm.summary}
                    </p>

                    {/* Scientific Mechanism Callout */}
                    <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-4 space-y-1.5">
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Cơ chế tác động khoa học:</span>
                      </div>
                      <p className="text-zinc-400 leading-relaxed">
                        {harm.mechanism}
                      </p>
                    </div>

                    {/* Evidence & Metrics */}
                    <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/30 mb-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Dẫn chứng lâm sàng / Thực tế</div>
                        <p className="text-xs text-zinc-200 leading-snug mt-0.5">{harm.evidence}</p>
                      </div>
                      {harm.dataMetric && (
                        <div className="shrink-0 text-right pl-3 border-l border-rose-500/30">
                          <div className="text-base sm:text-lg font-black text-rose-300">{harm.dataMetric.value}</div>
                          <div className="text-[9px] text-zinc-400 max-w-[100px] leading-tight">{harm.dataMetric.label}</div>
                        </div>
                      )}
                    </div>

                    {/* Key Impacts Bullet Points */}
                    <div className="space-y-2 mb-5">
                      <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Hậu quả trọng yếu:</div>
                      {harm.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={harm.refUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400 hover:text-white transition-colors group/src"
                  >
                    <span className="truncate max-w-[280px]">Nghiên cứu: {harm.scientificRef}</span>
                    <span className="text-rose-400 font-medium group-src:underline flex items-center gap-1 text-[11px]">
                      Xem tài liệu <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              ))}
            </div>

            {/* Interactive Feature 1: Decomposition Timeline Visualizer */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Bảng Tra cứu Trực quan: Thời gian Phân hủy Sinh học của Rác Nhựa</span>
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Bấm vào từng loại vật dụng để xem thời gian phân hủy thực tế ngoài tự nhiên và giải pháp thay thế bền vững.
                  </p>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2.5 py-1 rounded-lg shrink-0">
                  Từ 50 năm đến 1.000 năm
                </span>
              </div>

              {/* Items Timeline Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {DECOMPOSITION_TIMELINE.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTimelineItemName(item.name)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      activeTimelineItemName === item.name
                        ? 'bg-amber-950/40 border-amber-500 text-white shadow-md'
                        : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    <span className="text-xs font-semibold truncate w-full mb-1">{item.name.split('(')[0]}</span>
                    <span className="text-xs font-bold text-amber-400">{item.displayText}</span>
                  </button>
                ))}
              </div>

              {/* Active Item Deep Dive */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{selectedTimelineData.name}</span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {selectedTimelineData.displayText}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300">
                    <strong className="text-zinc-400">Ngữ cảnh sử dụng: </strong>
                    {selectedTimelineData.usageContext}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 shrink-0 md:max-w-xs">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Giải pháp thay thế xanh ngay hôm nay:</span>
                  </div>
                  <p className="text-xs text-zinc-200 font-medium">
                    {selectedTimelineData.alternative}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Feature 2: Microplastics Body Exposure Map */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Droplet className="w-4 h-4 text-cyan-400" />
                    <span>Sơ đồ Tương tác: 5 Cơ quan Chịu Tác động của Vi nhựa trong Cơ thể Người</span>
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Nghiên cứu lâm sàng chứng minh vi nhựa và hạt nano nhựa đã xâm nhập vào các cơ quan nội tạng quan trọng nhất.
                  </p>
                </div>
                <div className="text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-lg font-semibold shrink-0">
                  Hấp thụ ~5g vi nhựa / tuần
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-5">
                {MICROPLASTIC_BODY_IMPACTS.map((impact) => {
                  const isSelected = selectedBodyPartName === impact.part;
                  return (
                    <button
                      key={impact.part}
                      onClick={() => setSelectedBodyPartName(impact.part)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-cyan-950/50 border-cyan-500 shadow-md text-white'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900'
                      }`}
                    >
                      <div className="text-xs font-bold mb-1">{impact.part}</div>
                      <div className="text-[11px] text-zinc-500 line-clamp-2">{impact.detail}</div>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-xs text-zinc-300 flex items-start gap-3">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cyan-300 font-semibold">{selectedBodyPartData.part}: </strong>
                  <span>{selectedBodyPartData.detail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PHẦN 2.3: BỘ SƯU TẬP HÌNH ẢNH: BEFORE/AFTER & LIGHTBOX GALLERY */}
        {/* ============================================================== */}
        <div className="mb-24">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>MỤC 2.3 · HÌNH ẢNH THỰC ĐỊA &amp; MINH CHỨNG</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 flex items-center gap-2">
              <span>Bộ sưu tập Hình ảnh Thực tế &amp; So sánh Trước / Sau</span>
            </h3>
            <p className="text-zinc-400 text-sm">
              Khung xem ảnh Trước/Sau minh chứng cho sức mạnh của hành động cộng đồng, cùng bộ sưu tập tư liệu môi trường chính thống từ WWF, UNEP, Bộ TN&amp;MT và các cơ quan báo chí.
            </p>
          </div>

          {/* Before / After Interactive Slider */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {BEFORE_AFTER_CASES.map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </div>

          {/* Lightbox Image Gallery with Category Filter */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white flex flex-wrap items-center gap-2">
                  <span>Thư viện Ảnh Tư liệu Thực trạng</span>
                </h4>
                <p className="text-xs text-zinc-400">
                  Mỗi hình ảnh tư liệu đều có nút liên kết trực tiếp đến bài báo phóng sự gốc (Tuổi Trẻ, Lao Động, PLO,...). Bấm <strong className="text-rose-400 font-semibold">"Đọc bài báo trực tiếp"</strong> bên dưới mỗi ảnh hoặc bấm vào ảnh để phóng to HD &amp; xem chi tiết.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Button to quickly reverse / swap first and last image */}
                <button
                  type="button"
                  onClick={() => setIsGalleryReversed(prev => !prev)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all shadow-sm ${
                    isGalleryReversed
                      ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
                  }`}
                  title="Đảo thứ tự hình ảnh: Hình đầu ⇄ Hình cuối"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Đổi thứ tự (Hình đầu ⇄ Hình cuối)</span>
                </button>

                {/* Category Filter */}
                <div className="flex flex-wrap items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setGalleryCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        galleryCategory === cat
                          ? 'bg-emerald-600 text-white shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryItem(item)}
                  className="group rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    {/* Clean Image Container without distracting overlay logos */}
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Zoom Icon on Hover */}
                      <div className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-zinc-950/80 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>

                      {/* Clean bottom location pill */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-[10px] uppercase font-mono text-zinc-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm tracking-wider">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Card Content & Article Direct Access */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
                          {item.category}
                        </span>
                        <span className="text-xs font-mono text-zinc-500">Năm {item.year}</span>
                      </div>

                      <h5 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-2 leading-snug">
                        {item.title}
                      </h5>

                      {item.articleTitle && (
                        <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 text-[11px] text-zinc-300 mb-3 flex items-start gap-2">
                          <Newspaper className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">
                            <strong className="text-rose-400 font-medium">Báo chí: </strong>
                            "{item.articleTitle}"
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Buttons */}
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-rose-950/50 hover:shadow-rose-900/60"
                      title={`Bấm để mở trực tiếp bài báo phóng sự trên ${item.source}`}
                    >
                      <Newspaper className="w-3.5 h-3.5 shrink-0" />
                      <span>Đọc bài báo trực tiếp</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>

                    <div className="mt-2.5 pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="flex items-center gap-1 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                        <Maximize2 className="w-3 h-3" />
                        <span>Xem ảnh HD</span>
                      </span>
                      {item.coordinates && (
                        <span className="text-blue-400/80 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>Google Maps</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PHẦN 2.4: HỆ THỐNG GIẢI PHÁP KHẮC PHỤC (TAB SWITCHING) */}
        {/* ============================================================== */}
        <div id="solutions" className="pt-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>HỆ THỐNG GIẢI PHÁP ĐỒNG BỘ</span>
            </div>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Giải pháp Khắc phục Toàn diện theo Cấp độ Thực thi
            </h3>
            <p className="text-zinc-400 text-sm mt-2">
              Chuyển đổi lối sống cá nhân, đổi mới công nghệ doanh nghiệp và hoàn thiện hành lang pháp lý của nhà nước để ngăn chặn rác thải nhựa tại nguồn.
            </p>
          </div>

          {/* Tab Switching Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto">
            {solutionTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSolutionTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSolutionTab(tab.id)}
                  className={`flex items-center gap-3.5 p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'bg-zinc-900 border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                      : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-900/70'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {tab.label}
                    </div>
                    <div className="text-[11px] text-zinc-400 truncate max-w-[200px]">
                      {tab.sub}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {SOLUTIONS_BY_LEVEL[activeSolutionTab]?.map((sol) => (
              <div
                key={sol.id}
                className="bg-zinc-900/80 rounded-2xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
                      {sol.metrics}
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {sol.title}
                  </h4>

                  <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                    <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                      Hành động cốt lõi:
                    </div>
                    {sol.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span>Cam kết hành động ngay</span>
                  <span className="text-zinc-500 group-hover:text-emerald-400 transition-colors">✓ Sẵn sàng</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </section>
  );
};

export default EnvironmentalStatusSection;
