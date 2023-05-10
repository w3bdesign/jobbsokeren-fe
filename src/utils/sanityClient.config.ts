import { createClient } from '@sanity/client';
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

interface SanityClientConfig {
  projectId: string;
  dataset: string;
  useCdn?: boolean;
  apiVersion?: string;
}

const clientConfig: SanityClientConfig = {
  projectId: projectId,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-02-01',
};

const client = createClient(clientConfig);

export default client;
