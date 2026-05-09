import { icons } from "./icons";

type RelativeDateOptions = {
  days?: number;
  months?: number;
  years?: number;
  hour?: number;
};

const toRelativeIso = ({
  days = 0,
  months = 0,
  years = 0,
  hour = 9,
}: RelativeDateOptions) => {
  const date = new Date();

  date.setUTCHours(hour, 0, 0, 0);
  date.setUTCFullYear(date.getUTCFullYear() + years);
  date.setUTCMonth(date.getUTCMonth() + months);
  date.setUTCDate(date.getUTCDate() + days);

  return date.toISOString();
};

export const tabs: AppTab[] = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "subscriptions", title: "Subscriptions", icon: icons.wallet },
  { name: "insights", title: "Insights", icon: icons.activity },
  { name: "settings", title: "Settings", icon: icons.setting },
];

export const HOME_USER = {
  name: "Adrian | JS Mastery",
};

export const HOME_BALANCE = {
  amount: 2489.48,
  nextRenewalDate: toRelativeIso({ days: 2, hour: 9 }),
};

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
  {
    id: "spotify",
    icon: icons.spotify,
    name: "Spotify",
    price: 5.99,
    currency: "USD",
    daysLeft: 2,
  },
  {
    id: "notion",
    icon: icons.notion,
    name: "Notion",
    price: 12.0,
    currency: "USD",
    daysLeft: 4,
  },
  {
    id: "figma",
    icon: icons.figma,
    name: "Figma",
    price: 15.0,
    currency: "USD",
    daysLeft: 6,
  },
];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "adobe-creative-cloud",
    icon: icons.adobe,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: toRelativeIso({ months: -14, days: -3, hour: 10 }),
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: toRelativeIso({ days: 11, hour: 10 }),
    color: "#f5c542",
  },
  {
    id: "github-pro",
    icon: icons.github,
    name: "GitHub Pro",
    plan: "Developer",
    category: "Developer Tools",
    paymentMethod: "Mastercard ending in 2408",
    status: "active",
    startDate: toRelativeIso({ months: -18, days: -7, hour: 10 }),
    price: 9.99,
    currency: "USD",
    billing: "Monthly",
    renewalDate: toRelativeIso({ days: 15, hour: 10 }),
    color: "#e8def8",
  },
  {
    id: "claude-pro",
    icon: icons.claude,
    name: "Claude Pro",
    plan: "Pro Plan",
    category: "AI Tools",
    paymentMethod: "Amex ending in 1010",
    status: "paused",
    startDate: toRelativeIso({ months: -11, days: -12, hour: 10 }),
    price: 20.0,
    currency: "USD",
    billing: "Monthly",
    renewalDate: toRelativeIso({ days: 18, hour: 10 }),
    color: "#b8d4e3",
  },
  {
    id: "canva-pro",
    icon: icons.canva,
    name: "Canva Pro",
    plan: "Yearly Access",
    category: "Design",
    paymentMethod: "Visa ending in 7784",
    status: "cancelled",
    startDate: toRelativeIso({ years: -2, months: -1, days: -7, hour: 10 }),
    price: 119.99,
    currency: "USD",
    billing: "Yearly",
    renewalDate: toRelativeIso({ years: 1, months: -1, days: -7, hour: 10 }),
    color: "#b8e8d0",
  },
];
