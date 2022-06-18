CREATE TABLE "models" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "brand_id" bigint,
  "created_at" timestamp [ (p) ] '6',
  "updated_at" timestamp [ (p) ] '6'
);

CREATE INDEX "index_models_on_brand_id" ON "models" ("brand_id");

CREATE UNIQUE INDEX ON "models" ("id");

ALTER TABLE "models" ADD FOREIGN KEY ("brand_id") REFERENCES "brands" ("id");
