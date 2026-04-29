export enum RecordType {
  A = "A",
  AAAA = "AAAA",
  CNAME = "CNAME",
  MX = "MX",
  TXT = "TXT",
  SRV = "SRV",
  PTR = "PTR",
  NS = "NS",
  SOA = "SOA"
}

export enum ProviderType {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  INFOBLOX = "INFOBLOX",
  BIND = "BIND",
  WINDOWS = "WINDOWS",
  CLOUDFLARE = "CLOUDFLARE",
  COREDNS = "COREDNS"
}

export interface DNSRecord {
  id: string;
  zoneId: string;
  name: string;
  type: RecordType;
  value: string;
  ttl: number;
  priority?: number;
  weight?: number;
  metadata?: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface DNSZone {
  id: string;
  name: string;
  provider: ProviderType;
  description?: string;
  isPrivate: boolean;
  vpcs?: string[];
  metadata?: Record<string, any>;
  status: "ACTIVE" | "INACTIVE" | "ERROR";
  createdAt: string;
  updatedAt: string;
}

export interface HealthCheck {
  id: string;
  resolverId: string;
  status: "UP" | "DOWN";
  latencyMs: number;
  checkedAt: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  timestamp: string;
  details: any;
}
