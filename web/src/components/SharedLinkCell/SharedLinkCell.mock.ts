// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  sharedLink: {
    __typename: 'SharedLink' as const,
    id: '42',
    title: 'Post 1',
    points: 1,
    url: 'https://example.com',
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
      {
        id: '101',
        linkId: '42',
        userId: 2,
      },
    ],
  },
})
