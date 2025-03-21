import { createAuthRouteHandlers } from "@/../utils/amplifyServerUtils";

export const GET = createAuthRouteHandlers({
  redirectOnSignInComplete: "/dashboard",
  redirectOnSignOutComplete: "/",
});
