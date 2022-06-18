CREATE TABLE "vehicles" (
  "id" int PRIMARY KEY,
  "legal_identifier" varchar,
  "name" string,
  "frame_size" int,
  "satus" int,
  "model_id" bigint,
  "created_at" timestamp [ (p) ] '6',
  "updated_at" timestamp [ (p) ] '6'
);

CREATE INDEX "index_vehicles_on_model_id" ON "vehicles" ("model_id");

CREATE UNIQUE INDEX ON "vehicles" ("id");

ALTER TABLE "vehicles" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");
