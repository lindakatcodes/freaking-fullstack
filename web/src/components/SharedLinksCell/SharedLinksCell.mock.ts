// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  sharedLinks: [
    {
      __typename: 'SharedLink' as const,
      id: '42',
      title: 'Post 1',
      url: 'https://example.com',
      submittedBy: {
        email: 'user1@test.co',
        displayName: 'Linda',
      },
    },
    {
      __typename: 'SharedLink' as const,
      id: '43',
      title: 'Post 2',
      url: 'https://redwoodjs.com',
      submittedBy: {
        email: 'user1email@test.co',
        displayName: null,
      },
    },
    {
      __typename: 'SharedLink' as const,
      id: '44',
      title: 'Post 3',
      url: 'https://example.com',
      submittedBy: {
        email: 'user2@test.co',
        displayName: 'Jon',
      },
    },
  ],
})
