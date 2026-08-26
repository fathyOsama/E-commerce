import { environmentdev } from "src/environments/environment.development";

export default {
  auth: {
    domain: environmentdev.auth0.domain,
    clientId: environmentdev.auth0.clientId,

    authorizationParams: {
      redirect_uri: 'http://localhost:4200'
    }
  },

  httpInterceptor: {
    allowedList: [
      'http://localhost:8080/api/orders/*',
      'http://localhost:8080/api/checkout/purchase'
    ]
  }
};
