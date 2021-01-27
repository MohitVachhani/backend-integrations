import { AuthTypeEnum, SignUpTypeEnum } from '@enums/user';
import { UserAuthenticatePayload } from '@interface/user/payload/userAuthenticate.payload';
import { userService } from '@services/user/user.service';
import { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';
import SpotifyStrategy from 'passport-spotify';
import { ConfigureStrategy } from '../configureStrategy';

const SpotifyRouter = Router();
ConfigureStrategy.spotifyStrategy(passport);
const spotifyScopes = ['user-read-email', 'user-read-private'];

function spotifyAuthMiddleware(req: Request, res: Response, next: NextFunction): void {
  console.log('starting spotify authentication............');
  passport.authenticate(SignUpTypeEnum.SPOTIFY, {
    scope: spotifyScopes,
  })(req, res, next);
}

SpotifyRouter.get('/', spotifyAuthMiddleware);

SpotifyRouter.get('/callback', async function (req: Request, res: Response, next: NextFunction) {
  passport.authenticate(
    SignUpTypeEnum.SPOTIFY,
    async (error, input: SpotifyStrategy.Profile): Promise<Response<UserAuthenticatePayload>> => {
      const { displayName, emails, photos } = input;

      const [firstName, lastName] = displayName.split(' ');
      const emailId = emails[0].value;

      const { users } = await userService.getUsers({ filters: { emailIds: [emailId] }, projection: { emailId: 1 } });
      const [user] = users;

      if (user) {
        return res.send({ success: true, user, authType: AuthTypeEnum.LOGIN });
      }

      const createdUser = await userService.createUser({
        firstName,
        lastName,
        signUpType: SignUpTypeEnum.SPOTIFY,
        profilePicture: photos[0],
        emailId,
        createdById: '60105fa80000000000000000',
      });

      return res.send({ success: true, user: createdUser, authType: AuthTypeEnum.SIGN_UP });
    }
  )(req, res, next);
});

export default SpotifyRouter;
