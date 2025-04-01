// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  user: {
    __typename: 'user' as const,
    id: 1,
    comments: [
      {
        __typename: 'comment' as const,
        body: 'Come for the stellar job search tips, stay for the community roasting and pet pics!',
        createdAt: '2025-03-26T20:17:30.314Z',
        linkId: '489eaeae-2021-4516-910c-154d9b8fd901',
        link: {
          title: 'Join the Torc platform!',
          url: 'https://www.torc.dev/',
        },
      },
      {
        __typename: 'comment' as const,
        body: 'What a cool dev, would be great to see someone hire her! ;)',
        createdAt: '2025-03-19T20:44:36.775Z',
        linkId: 'bca336d9-a16a-47b9-bd37-b7d0f3d31bea',
        link: {
          title: 'Super cool dev site!',
          url: 'https://lindakat.com',
        },
      },
    ],
  },
})
