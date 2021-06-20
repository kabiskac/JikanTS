interface Animeography {
  readonly mal_id: string;
  readonly name: string;
  readonly url: string;
  readonly image_url: string;
  readonly role: string;
}

interface Mangaography extends Animeography {}

interface VoiceActor {
  readonly mal_id: string;
  readonly name: string;
  readonly url: string;
  readonly image_url: string;
  readonly language: string;
}

export interface CharacterById {
  readonly request_hash: string;
  readonly request_cached: boolean;
  readonly request_cache_expiry: number;
  readonly mal_id: number;
  readonly url: string;
  readonly name: string;
  readonly name_kanji: string;
  readonly nicknames: string[];
  readonly about: string;
  readonly member_favourites: number;
  readonly image_url: string;
  readonly animeography: Animeography[];
  readonly mangaography: Mangaography[];
  voice_actors: VoiceActor[];
}
