import { bot } from "./index";
import { color } from "bun";
import { SeriesData } from "./types";

export const send_new_episode = async ({
  series_name,
  episode_url,
  image_url,
}: SeriesData) => {
  await bot.helpers.sendMessage("1118266744511930459", {
    content: `${series_name}<@&1305891324750467152>`,
    embeds: [
      {
        title: series_name,
        url: episode_url,
        color: color("#950a0a", "number")!,
        image: {
          url: image_url,
        },
        footer: {
          text: "AnimeNi",
          iconUrl:
            "https://animeni.pl/wp-content/uploads/2024/11/1731257945-9260-116576.jpg",
        },
      },
    ],
  });
};
