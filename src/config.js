export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "hemin-notes-app-uploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2mgr6e3zdg.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Tutc6yGzr",
    APP_CLIENT_ID: "2uemn837ur3dofj7ra030hc1uv",
    IDENTITY_POOL_ID: "us-east-1:3fd03a75-0e86-4a6d-801f-416bea2bcde5",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_PjKE2DRdWMM8zxGbhk2wX5qH00NTHyLYP4",
};
