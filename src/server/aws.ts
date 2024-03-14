import { EC2Client } from "@aws-sdk/client-ec2"
import { env } from "~/env.mjs"

export const ec2Client = new EC2Client({
  credentials: {
    accessKeyId: env.AWS_PALWORLD_EC2_ACCESS_KEY,
    secretAccessKey: env.AWS_PALWORLD_EC2_SECRET,
  },
  region: "us-east-1",
})
