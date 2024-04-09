// Load the full build.
var _ = require('lodash');

const mapResponse = (result) => {
    return _.mapKeys(result, (v, k) => _.camelCase(k))
};

const mapArrayResponse = (data) => {
    const result = data.map((obj) => _.mapKeys(obj, (v, k) => _.camelCase(k)));
    return result
};

module.exports = {
    mapResponse,
    mapArrayResponse
};