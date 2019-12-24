
export class Preview {
  small: string;
  medium: string;
  large: string;
  template: string;
}

export class Channel {
  mature: boolean;
  status: string;
  broadcaster_language: string;
  broadcaster_software: string;
  display_name: string;
  game: string;
  language: string;
  _id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  partner: boolean;
  logo: string;
  video_banner: string;
  profile_banner: string;
  profile_banner_background_color: string;
  url: string;
  views: number;
  followers: number;
  broadcaster_type: string;
  description: string;
  private_video: boolean;
  privacy_options_enabled: boolean;
}

export class Stream {
  _id: number;
  game: string;
  broadcast_platform: string;
  community_id: string;
  community_ids: any[];
  viewers: number;
  video_height: number;
  average_fps: number;
  delay: number;
  created_at: Date;
  is_playlist: boolean;
  stream_type: string;
  preview: Preview;
  channel: Channel;
}

export class Info {
  stream: Stream;
}

export class User {
  display_name: string;
  _id: string;
  name: string;
  type: string;
  bio: string;
  created_at: Date;
  updated_at: Date;
  logo: string;
  info: Info;
  live: string;
}

export class Twitchuser {
  _total: number;
  users: User[];
}