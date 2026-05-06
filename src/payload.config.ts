import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { cloudinaryStorage } from "payloadcms-storage-cloudinary";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import Services from './collections/Services'

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Services],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  plugins: [
    cloudinaryStorage({
      collections: {
        media: true,
      },
      cloudinaryConfig: {
        cloud_name: process.env.CLOUDINARY_NAME ?? "",
        api_key: process.env.CLOUDINARY_API_KEY ?? "",
        api_secret: process.env.CLOUDINARY_API_SECRET ?? "",
      },
    }),
  ],
});
