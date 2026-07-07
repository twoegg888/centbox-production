import { useEffect, useState } from "react";
import { getApiBase, publicAnonKey } from "../../../utils/supabase/info";

export type SiteResourceSettings = {
  drawAnimationUrl: string;
  fontCssUrls: string[];
};

export const DEFAULT_SITE_RESOURCES: SiteResourceSettings = {
  drawAnimationUrl:
    "https://res.cloudinary.com/dznubvml4/video/upload/v1772365174/grok-video-6b567bbd-14bc-4897-b1bb-43f044287617_rqx09n.mp4",
  fontCssUrls: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
    "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap",
    "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css",
  ],
};

function normalizeUrlList(value: unknown) {
  return Array.isArray(value) ? value.map((url) => String(url || "").trim()).filter(Boolean) : [];
}

export function mergeSiteResources(settings: Partial<SiteResourceSettings> = {}): SiteResourceSettings {
  const fontCssUrls = normalizeUrlList(settings.fontCssUrls);

  return {
    drawAnimationUrl: String(settings.drawAnimationUrl || DEFAULT_SITE_RESOURCES.drawAnimationUrl).trim(),
    fontCssUrls: fontCssUrls.length > 0 ? fontCssUrls : DEFAULT_SITE_RESOURCES.fontCssUrls,
  };
}

export function useSiteResources() {
  const [resources, setResources] = useState<SiteResourceSettings>(DEFAULT_SITE_RESOURCES);

  useEffect(() => {
    const fetchSiteResources = async () => {
      try {
        const response = await fetch(`${getApiBase()}/site-resources`, {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) return;

        const data = await response.json();
        setResources(mergeSiteResources(data.resources || {}));
      } catch (error) {
        console.error("Failed to fetch site resources:", error);
      }
    };

    void fetchSiteResources();
  }, []);

  return resources;
}

export function useDynamicFontLinks(fontCssUrls: string[]) {
  useEffect(() => {
    document.querySelectorAll('link[data-admin-font="true"]').forEach((element) => element.remove());

    fontCssUrls.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.adminFont = "true";
      document.head.appendChild(link);
    });

    return () => {
      document.querySelectorAll('link[data-admin-font="true"]').forEach((element) => element.remove());
    };
  }, [fontCssUrls]);
}
