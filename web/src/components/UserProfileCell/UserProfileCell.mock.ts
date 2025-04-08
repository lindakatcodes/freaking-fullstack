// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  user: {
    id: 42,
    bluesky: '',
    displayName: 'Linda',
    createdAt: '2025-04-03T22:39:57.370Z',
    email: 'linda@example.co',
    github: '',
    linkedin: '',
    twitch: '',
    website: 'https://lindakat.com',
    youtube: '',
    commentVotes: [
      {
        id: '1',
      },
      {
        id: '2',
      },
    ],
    comments: [
      {
        commentVotes: [
          {
            id: '4',
          },
          {
            id: '5',
          },
          {
            id: '6',
          },
        ],
      },
    ],
    linkVotes: [
      {
        id: '3',
      },
    ],
    sharedLinks: [
      {
        linkVotes: [
          {
            id: '7',
          },
          {
            id: '8',
          },
          {
            id: '9',
          },
        ],
      },
    ],
  },
})
