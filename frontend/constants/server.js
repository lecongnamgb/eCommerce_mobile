const SERVER_URL = {
  API_SERVER: "http://localhost:5000/",
};

const SERVICE_URL = {
  CLIENT_AUTH_SERVICES: {
    PREFIX: "client-auth/",
    SIGN_IN: {
      URL: PREFIX + "signup",
      METHOD: "POST",
    },
    SIGN_UP: {
      URL: PREFIX + "signup",
      METHOD: "POST",
    },
    CHANGE_PASSWORD: {
      URL: PREFIX + "change-password",
      METHOD: "POST",
    },
    REFRESH_TOKEN: {
      URL: PREFIX + "refresh-access-token",
      METHOD: "POST",
    },
  },
  JUDGE_SERVICES: {
    PREFIX: "judge/",
    POST_JUDGE: {
      URL: PREFIX + "post-judge",
      METHOD: "POST",
    },
    DELETE_JUDGE_BY_ID: {
        URL: PREFIX + "delete-judge/",
        METHOD: "DELETE"
    },
    GET_JUDGE: {
        URL: PREFIX + "get-judge",
        METHOD: "GET"
    },
    GET_BY_ID: {
        URL: PREFIX + "/",
        METHOD: "GET"
    }
  },

  LIKE_SERVICES: {
      PREFIX: "like/",
      LIKE_PRODUCT_BY_ID: {
        URL: PREFIX + "like-product/",
        METHOD: "POST"
      }
  },

  MEMBER_SERVICES: {
      PREFIX: "member/",
      GET_PERSONAL_INFO: {
        URL: PREFIX + "get-personal-info",
        METHOD: "GET"
      },
      REGISTER_SHOP: {
          URL: PREFIX + "register-shop",
          METHOD: "POST"
      }
  },

  ORDER_SERVICES: {
    PREFIX: "order/",
    GET_ORDER: {
        URL: PREFIX,
        METHOD: "GET"
    },
    ORDER_PRODUCT: {
        URL: PREFIX,
        METHOD: "POST"
    }
  },

  
};

export default SERVER_URL;
