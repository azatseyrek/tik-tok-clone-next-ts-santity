// http://localhost:3000/api/post

import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const query = allPostsQuery();
    const data = await client.fetch(query);

    res.status(200).json(data);
  }
};

export default handler;
