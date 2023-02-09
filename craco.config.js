module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/scss/helpers/variables.scss";
          @import "src/scss/helpers/functions.scss";
          @import "src/scss/helpers/mixins.scss";
          @import "src/scss/helpers/extends.scss";
          @import "src/components/general/Input/Input.scss";
        `,
      },
    },
  },
}
