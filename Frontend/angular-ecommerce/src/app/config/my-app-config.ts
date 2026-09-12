import { environment } from "src/environments/environment.development";

export default {
  auth: {
    domain: environment.auth0.domain,
    clientId: environment.auth0.clientId,

    authorizationParams: {
      redirect_uri: 'https://localhost:4200',
      audience: environment.auth0.audience,
    }
  },

  httpInterceptor: {
    allowedList: [
      'http://localhost:8080/api/orders/*',
      'http://localhost:8080/api/checkout/purchase'
    ]
  }
};
