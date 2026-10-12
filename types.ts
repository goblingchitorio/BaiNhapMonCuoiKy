export interface TeamMember {
  id: number;
  name: string;
  role: string;
  responsibility: string;
  avatar: string;
  linkedin: string;
  github: string;
  facebook: string;
  bioSnippet: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  caption: string;
  source: string;
  sourceUrl: string;
  articleTitle?: string;
  category: 'Đại dương' | 'Đô thị' | 'Kênh rạch' | 'Sinh thái';
  year: number;
  coordinates?: { lat: number; lng: number };
  hasMiniMap?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  location: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  source: string;
  sourceUrl: string;
  articleTitle?: string;
  coordinates?: { lat: number; lng: number };
  hasMiniMap?: boolean;
  mapZoom?: number;
}

export type SolutionLevel = 'individual' | 'business' | 'government';

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metrics?: string;
  keyPoints: string[];
}

export interface CleanupDetails {
  eventDate: string;
  meetingPoint: string;
  coordinatorName: string;
  coordinatorContact: string;
  targetWaste: string;
  requiredGear: string[];
  schedule: string[];
  sponsorsOrPartners?: string;
  resultSummary?: string;
}

export interface WasteHotspot {
  id: string;
  title: string;
  locationName: string;
  lat: number;
  lng: number;
  severity: 'critical' | 'moderate' | 'cleaned';
  description: string;
  imageUrl: string;
  reportedAt: string;
  reportedBy: string;
  upvotes: number;
  hasUpvoted?: boolean;
  volunteersNeeded: number;
  volunteersJoined: number;
  statusText: string;
  status?: 'pending_verification' | 'in_progress' | 'critical' | 'moderate' | 'cleaned';
  isPendingVerification?: boolean;
  verifiedBy?: string;
  verifiedAt?: string;
  verificationNote?: string;
  cleanupDetails?: CleanupDetails;
}

export interface DailyPlasticNewsItem {
  id: string;
  title: string;
  district: string;
  summary: string;
  wasteTonsToday: number;
  status: 'critical' | 'warning' | 'improving' | 'normal';
  timestamp: string;
  source: string;
  sourceUrl: string;
  actionRequired: string;
}

export interface VolunteerFormData {
  id?: string;
  hotspotId: string;
  hotspotTitle: string;
  hotspotLocation?: string;
  fullName: string;
  phone: string;
  email: string;
  availableDate: string;
  notes: string;
  createdAt?: string;
  status?: 'confirmed' | 'pending' | 'completed';
}

export interface GeneralStatusMetric {
  id: string;
  value: string;
  unit: string;
  label: string;
  sublabel: string;
  trend: string;
  source: string;
  sourceUrl: string;
  colorScheme: 'rose' | 'amber' | 'emerald' | 'cyan' | 'purple';
}

export interface GeneralStatusAspect {
  id: string;
  title: string;
  subtitle: string;
  highlightNumber: string;
  highlightLabel: string;
  description: string;
  points: string[];
  alertLevel: 'nguy_cap' | 'canh_bao' | 'nghiem_trong';
  quoteSource?: string;
  quoteSourceUrl?: string;
}

export interface PlasticHarmItem {
  id: string;
  title: string;
  category: 'suc_khoe' | 'sinh_thai' | 'moi_truong' | 'do_thi_kinh_te';
  categoryLabel: string;
  severity: 'Cực kỳ nguy cấp' | 'Báo động đỏ' | 'Nguy cơ tiềm ẩn' | 'Thiệt hại lâu dài';
  summary: string;
  mechanism: string;
  evidence: string;
  keyPoints: string[];
  scientificRef: string;
  refUrl: string;
  dataMetric?: {
    value: string;
    label: string;
  };
}

export interface DecompositionTimeItem {
  name: string;
  years: number;
  displayText: string;
  iconType: string;
  usageContext: string;
  alternative: string;
}
