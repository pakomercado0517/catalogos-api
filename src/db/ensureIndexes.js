async function ensureDatabaseIndexes(sequelize) {
  const statements = [
    `ALTER TABLE "catalogos" ADD COLUMN IF NOT EXISTS "category" VARCHAR(255) DEFAULT 'otros';`,
    `UPDATE "catalogos" SET "category" = 'otros' WHERE "category" IS NULL;`,
    `ALTER TABLE "catalogos" ALTER COLUMN "category" SET DEFAULT 'otros';`,
    `CREATE INDEX IF NOT EXISTS idx_catalogos_company_id ON "catalogos" ("companyId");`,
    `CREATE INDEX IF NOT EXISTS idx_catalogos_category ON "catalogos" ("category");`,
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
