"use strict";

/**
 * A set of functions called "actions" for `customsubtitles`
 */

module.exports = {
  generate: async (ctx, next) => {
    try {
      ctx.body = "hey";
    } catch (err) {
      ctx.body = err;
    }
  },
};
