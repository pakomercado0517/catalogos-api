async function ensureDatabaseIndexes(sequelize) {
  const statements = [
    `CREATE INDEX IF NOT EXISTS idx_catalogos_company_id ON "catalogos" ("companyId");`,
  ];

  for (const statement of statements) {
    try {
      await sequelize.query(statement);
    } catch (error) {
      console.error(`[db] No se pudo aplicar indice: ${error.message}`);
    }
  }
}

module.exports = { ensureDatabaseIndexes };
