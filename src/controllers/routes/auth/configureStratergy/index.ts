import { PassportStatic } from 'passport';
import SpotifyStrategy from 'passport-spotify';

export class ConfigureStratergy {
  static spotifyStratergy(passport: PassportStatic): void {
    passport.use(
      new SpotifyStrategy.Strategy(
        {
          clientID: process.env.SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
          callbackURL: process.env.SPOTIFY_CALLBACK_URL,
        },
        function (accessToken, refreshToken, expiresIn, profile, done) {
          console.log(accessToken);
          console.log(refreshToken);
          console.log(expiresIn);
          console.log(profile);
        }
      )
    );
  }
}
