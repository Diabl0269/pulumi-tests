import * as pulumi from '@pulumi/pulumi';
import * as gcp from '@pulumi/gcp';
import { Message } from '@hello-world/interfaces';

const a: Message = {
  message: 'my-bucket',
};

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket(a.message);

// Export the DNS name of the bucket
export const bucketName = bucket.url;
