

import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '@/../amplify_outputs.json';

export const { runWithAmplifyServerContext, createAuthRouteHandlers } = createServerRunner({
  config: outputs,

  runtimeOptions: {
    cookies: {
      domain: 'main.dym1w6ciej86r.amplifyapp.com', // making cookies available to all subdomains
      sameSite: 'none',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    }
  }
});