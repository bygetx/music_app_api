'use strict';

/**
 * playlist-manager service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::playlist-manager.playlist-manager');
