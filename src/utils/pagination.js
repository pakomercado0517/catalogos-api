const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 100;

function parsePagination(query = {}) {
  let limit = Number.parseInt(query.limit, 10);
  let offset = Number.parseInt(query.offset, 10);

  if (Number.isNaN(limit) || limit < 1) {
    limit = DEFAULT_LIMIT;
  }

  if (Number.isNaN(offset) || offset < 0) {
    offset = 0;
  }

  limit = Math.min(limit, MAX_LIMIT);

  return { limit, offset };
}

function buildPaginationResponse({ rows, count, limit, offset }) {
  return {
    data: rows,
    pagination: {
      limit,
      offset,
      total: count,
      hasMore: offset + rows.length < count,
    },
  };
}

module.exports = {
  DEFAULT_LIMIT,
  MAX_LIMIT,
  parsePagination,
  buildPaginationResponse,
};
