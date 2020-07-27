import passport from 'passport';
import { Request, Response, Router, NextFunction } from 'express';
import { ConfigureStratergy } from '../configureStratergy';
import { SocialMediaType } from '../../../../enums/auth';

const SpotifyRouter = Router();
ConfigureStratergy.spotifyStratergy(passport);
const spotifyScopes = ['user-read-email', 'user-read-private'];

function spotifyAuthMiddleware(req: Request, res: Response, next: NextFunction): void {
  passport.authenticate(SocialMediaType.SPOTIFY, {
    scope: spotifyScopes,
  })(req, res, next);
}

SpotifyRouter.get('/', spotifyAuthMiddleware);

SpotifyRouter.get('/callback', async function (req: Request, res: Response, next: NextFunction) {
  passport.authenticate(SocialMediaType.SPOTIFY, async (input) => {
    return res.send(input);
  })(req, res, next);
});

export default SpotifyRouter;
