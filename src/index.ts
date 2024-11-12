import { Hono } from "hono";
import { createBot, Intents } from "@discordeno/bot";
import { send_new_episode } from "./embed";
import { SeriesData } from "./types";

export const bot = createBot({
  token: Bun.env.TOKEN ?? "",
  intents: Intents.Guilds | Intents.GuildMessages, // Or other intents that you might needs.
  events: {
    ready: (data) => {
      console.log(`The shard ${data.shardId} is ready!`);
    },
  },
});

const app = new Hono();

app.post("/", async (c) => {
  const body: SeriesData = await c.req.json();
  send_new_episode(body);
  return c.text("Hello Hono!");
});

export default app;
bot.start();
