import { SignUpTypeEnum } from '@enums/user';
import { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';
import { ConfigureStrategy } from '../configureStrategy';

const SpotifyRouter = Router();
ConfigureStrategy.spotifyStrategy(passport);
const spotifyScopes = ['user-read-email', 'user-read-private'];

function spotifyAuthMiddleware(req: Request, res: Response, next: NextFunction): void {
  passport.authenticate(SignUpTypeEnum.SPOTIFY, {
    scope: spotifyScopes,
  })(req, res, next);
}

SpotifyRouter.get('/', spotifyAuthMiddleware);

SpotifyRouter.get('/callback', async function (req: Request, res: Response, next: NextFunction) {
  passport.authenticate(SignUpTypeEnum.SPOTIFY, async (input) => {
    return res.send(input);
  })(req, res, next);
});

export default SpotifyRouter;
