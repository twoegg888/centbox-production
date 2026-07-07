import { useEffect, useMemo, useState } from "react";
import { getApiBase, publicAnonKey } from "../../../utils/supabase/info";
import { CANONICAL_BOX_TICKET_TYPES, CanonicalBoxTicketType } from "./ticketTypes";

export type BoxSetting = {
  ticketType: CanonicalBoxTicketType;
  displayName: string;
  isActive: boolean;
  sortOrder: number;
  homeImageUrl: string;
  detailImageUrl: string;
};

export const DEFAULT_BOX_SETTINGS: BoxSetting[] = [
  {
    ticketType: "legendary",
    displayName: "전설의 상자",
    isActive: true,
    sortOrder: 1,
    homeImageUrl: "https://dbase01.cafe24.com/centbox/dia%20box.png",
    detailImageUrl: "https://dbase01.cafe24.com/Centbox/diamond_detail1.png",
  },
  {
    ticketType: "mystery",
    displayName: "미스터리 상자",
    isActive: true,
    sortOrder: 2,
    homeImageUrl: "https://dbase01.cafe24.com/centbox/gold%20box.png",
    detailImageUrl: "https://dbase01.cafe24.com/Centbox/gold_detail1.png",
  },
  {
    ticketType: "lucky",
    displayName: "행운의 상자",
    isActive: true,
    sortOrder: 3,
    homeImageUrl: "https://dbase01.cafe24.com/centbox/pla%20box.png",
    detailImageUrl: "https://dbase01.cafe24.com/Centbox/platinum_detail1.png",
  },
  {
    ticketType: "starlight",
    displayName: "별빛 상자",
    isActive: true,
    sortOrder: 4,
    homeImageUrl: "https://dbase01.cafe24.com/centbox/rubybox.png",
    detailImageUrl: "https://dbase01.cafe24.com/Centbox/ruby_detail1.png",
  },
  {
    ticketType: "purdal",
    displayName: "퍼달이의 주머니",
    isActive: true,
    sortOrder: 5,
    homeImageUrl: "",
    detailImageUrl: "",
  },
];

export const DEFAULT_BOX_DISPLAY_NAMES = DEFAULT_BOX_SETTINGS.reduce(
  (names, setting) => ({
    ...names,
    [setting.ticketType]: setting.displayName,
  }),
  {} as Record<CanonicalBoxTicketType, string>
);

export function mergeBoxSettings(settings: Partial<BoxSetting>[] = []): BoxSetting[] {
  return DEFAULT_BOX_SETTINGS.map((defaultSetting) => {
    const savedSetting = settings.find((setting) => setting.ticketType === defaultSetting.ticketType);
    return {
      ...defaultSetting,
      ...savedSetting,
      ticketType: defaultSetting.ticketType,
      displayName: String(savedSetting?.displayName || defaultSetting.displayName),
      isActive: savedSetting?.isActive !== false,
      sortOrder: Number(savedSetting?.sortOrder || defaultSetting.sortOrder),
      homeImageUrl: String(savedSetting?.homeImageUrl || defaultSetting.homeImageUrl || ""),
      detailImageUrl: String(savedSetting?.detailImageUrl || defaultSetting.detailImageUrl || ""),
    };
  }).sort((first, second) => first.sortOrder - second.sortOrder);
}

export function useBoxSettings() {
  const [boxSettings, setBoxSettings] = useState<BoxSetting[]>(DEFAULT_BOX_SETTINGS);

  useEffect(() => {
    const fetchBoxSettings = async () => {
      try {
        const response = await fetch(`${getApiBase()}/box-settings`, {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        });

        if (!response.ok) return;

        const data = await response.json();
        setBoxSettings(mergeBoxSettings(data.settings || []));
      } catch (error) {
        console.error("Failed to fetch box settings:", error);
      }
    };

    void fetchBoxSettings();
  }, []);

  const activeBoxSettings = useMemo(
    () => boxSettings.filter((setting) => setting.isActive && CANONICAL_BOX_TICKET_TYPES.includes(setting.ticketType)),
    [boxSettings]
  );

  const displayNames = useMemo(
    () =>
      boxSettings.reduce(
        (names, setting) => ({
          ...names,
          [setting.ticketType]: setting.displayName,
        }),
        { ...DEFAULT_BOX_DISPLAY_NAMES }
      ),
    [boxSettings]
  );

  return { boxSettings, activeBoxSettings, displayNames };
}
