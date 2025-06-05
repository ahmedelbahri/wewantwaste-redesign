import axios, { paths } from "@/lib/axios";

import type { Skips } from "@/types/skips";

interface SkipByLocation {
  postcode?: string;
  area?: string;
}

export async function getSkipByLocation({
  postcode = "",
  area = "",
}: SkipByLocation) {
  const response = await axios.get(
    paths.skips.getByLocation +
      (postcode.length > 0 && "?postcode=" + postcode) +
      (area.length > 0 && "&area=" + area)
  );
  return response.data as Skips[];
}
