import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../utils/client';
import { allUsersQuery } from '../../utils/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const user = req.body;
    client
      .createIfNotExists(user)
      .then(() => res.status(200).json({ message: 'Login success' }));
  }
}
