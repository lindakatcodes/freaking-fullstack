// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  sharedLinksByUser: [
    {
      __typename: 'SharedLink' as const,
      id: '42',
      title: 'Post 1',
      url: 'https://example.com',
      points: 3,
      submittedBy: {
        email: 'user0@test.co',
        displayName: 'Linda',
        id: 1,
      },
      comments: [{ id: '1' }, { id: '2' }],
      linkVotes: [
        {
          id: '100',
          linkId: '42',
          userId: 1,
        },
      ],
    },
    {
      __typename: 'SharedLink' as const,
      id: '43',
      title: 'Post 2',
      url: 'https://redwoodjs.com',
      points: 0,
      submittedBy: {
        email: 'user1@test.co',
        displayName: null,
        id: 2,
      },
      comments: [],
      linkVotes: [],
    },
    {
      __typename: 'SharedLink' as const,
      id: '44',
      title: 'Post 3',
      url: 'https://example.com',
      points: 3,
      submittedBy: {
        email: 'user2@test.co',
        displayName: 'Jon',
        id: 3,
      },
      comments: [{ id: '3' }],
      linkVotes: [
        {
          id: '100',
          linkId: '44',
          userId: 1,
        },
        {
          id: '101',
          linkId: '44',
          userId: 2,
        },
      ],
    },
  ],
})
