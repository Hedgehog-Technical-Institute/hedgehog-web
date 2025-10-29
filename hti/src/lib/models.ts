// src/lib/models.ts


// GameUrls: Urls Associated with the entry (Game)
export type GameUrls = {
  booth?: string | null;
  steam?: string | null;
  steamwishlist?: string | null;
  gamejolt?: string | null;
  itchio?: string | null;
  gamebanana?: string | null;
  website?: string | null;
  portfolio?: string | null;
  youtube?: string | null;
  discord?: string | null;
  twitter?: string | null;
  bluesky?: string | null;
  download?: string | null;
  roblox?: string | null;
};

// Game: Every Submission for all HTI events
export class Game {

  private static nextID = 0;
  id: number;
  slug: string;
  title: string;
  brief: string;
  authors: Record<string, string>;
  description: string[];
  thumbnail: string;
  trailers: string[];      // mp4 or YouTube links
  screenshots: string[];   // resolved URLs to images/gifs
  hero: string[];   
  logo: string[];
  icon: string[];
  platforms: string[];
  tags: string[];
  version: string;
  urls: GameUrls;
  isFeatured: boolean;
  isBoothAvailable: boolean;
  isPlayable: boolean;

  constructor(
    slug: string,
    title: string,
    brief: string,
    authors: Record<string, string>,
    description: string[],
    thumbnail: string,
    trailers: string[],
    screenshots: string[],
    hero: string[],
    logo: string[],
    icon: string[],
    platforms: string[],
    tags: string[],
    version: string,
    urls: GameUrls,
    isFeatured: boolean = false,
    isBoothAvailable: boolean = false,
    isPlayable: boolean = false
  ) {
    this.id = Game.nextID++;
    this.slug = slug;
    this.title = title;
    this.brief = brief;
    this.authors = authors;
    this.description = description;
    this.thumbnail = thumbnail;
    this.trailers = trailers;
    this.screenshots = screenshots;
    this.hero = hero;
    this.logo = logo;
    this.icon = icon;
    this.platforms = platforms;
    this.tags = tags;
    this.version = version;
    this.urls = urls;
    this.isFeatured = isFeatured;
    this.isBoothAvailable = isBoothAvailable;
    this.isPlayable = isPlayable;
  }
}

// Event: Every HTI event ingo.
export class Event {
  private static nextID = 0;
  eventId: number;
  eventSlug: string;
  name: string;
  brief: string;
  year: number;
  description: string[];
  media: string[];
  direct: string;
  treehouse: string[];
  games: Game[];

  constructor(
    eventSlug: string,
    name: string,
    brief: string,
    year: number,
    description: string[],
    media: string[],
    direct: string,
    treehouse: string[],
    games: Game[],

  ) {
    this.eventId = Event.nextID++;
    this.eventSlug = eventSlug;
    this.name = name;
    this.brief = brief;
    this.year = year;
    this.description = description
    this.media = media;
    this.direct = direct;
    this.treehouse = treehouse;
    this.games = games;
  }
}

// TODO (future improvement):
// - Add a slugfallback so ids remain persistent between builds