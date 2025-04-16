// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  sharedLinks: [
    {
      __typename: 'SharedLink' as const,
      id: '42',
      title: 'Post 1',
      url: 'https://example.com',
      points: 3,
      submittedBy: {
        id: 1,
        email: 'user0@test.co',
        displayName: 'Linda',
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
        id: 2,
        email: 'user1@test.co',
        displayName: null,
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
        id: 3,
        email: 'user2@test.co',
        displayName: 'Jon',
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
