import type { SocialLink } from "@/types/navigation";
import { SITE_CONFIG } from "@/config/site";

/**
 * Centralized social links data structure.
 * Only platforms with a URL will be rendered.
 * Enable future platforms by adding their URL to site config.
 */
export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: SITE_CONFIG.social.linkedin,
    iconKey: "linkedin",
  },
  {
    platform: "GitHub",
    url: SITE_CONFIG.social.github,
    iconKey: "github",
  },
  {
    platform: "Facebook",
    url: SITE_CONFIG.social.facebook,
    iconKey: "facebook",
  },
  {
    platform: "Instagram",
    url: SITE_CONFIG.social.instagram,
    iconKey: "instagram",
  },
  {
    platform: "TikTok",
    url: SITE_CONFIG.social.tiktok,
    iconKey: "tiktok",
  },
  {
    platform: "X",
    url: SITE_CONFIG.social.x,
    iconKey: "x",
  },
  {
    platform: "YouTube",
    url: SITE_CONFIG.social.youtube,
    iconKey: "youtube",
  },
];