import { PassportStatic } from 'passport';
import SpotifyStrategy from 'passport-spotify';

export class ConfigureStrategy {
  static spotifyStrategy(passport: PassportStatic): void {
    passport.use(
      new SpotifyStrategy.Strategy(
        {
          clientID: process.env.SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
          callbackURL: process.env.SPOTIFY_LOCAL_CALLBACK_URL,
        },
        function (
          accessToken: string,
          refreshToken: string,
          profile: SpotifyStrategy.Profile,
          done: (error?: Error | null, user?: SpotifyStrategy.Profile, info?: object) => void
        ) {
          return done(null, profile);
        }
      )
    );
  }
}
