module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c062e088f32b9ed4256cfd414a99042d'),
  },
});
