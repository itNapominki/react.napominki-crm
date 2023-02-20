module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/scss/helpers/variables.scss";
          @import "src/assets/scss/helpers/functions.scss";
          @import "src/assets/scss/helpers/mixins.scss";
          @import "src/assets/scss/helpers/extends.scss";
          @import "src/components/general/Input/Input.scss";
        `,
      },
    },
  },
}
