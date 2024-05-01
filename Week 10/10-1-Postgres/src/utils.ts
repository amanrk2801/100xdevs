import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://ytxnubpy:OPPJcAtxr03nlp8zKCdQNaFNUXvx_n2m@flora.db.elephantsql.com/ytxnubpy");
    await client.connect();
    return client;
}