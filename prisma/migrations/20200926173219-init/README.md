# Migration `20200926173219-init`

This migration has been generated by EmonHR at 9/26/2020, 11:32:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
)

CREATE TABLE "Variant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "prodId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    FOREIGN KEY ("prodId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200926173219-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,30 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+  experimentalFeatures = ["connectOrCreate"]
+}
+
+
+model Product {
+  id        Int       @default(autoincrement()) @id
+  name      String
+  variants  Variant[]
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+}
+
+model Variant {
+  id        Int      @default(autoincrement()) @id
+  name      String
+  product   Product  @relation(fields: [prodId], references: [id])
+  prodId    Int
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+}
```

