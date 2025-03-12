// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  user: {
    __typename: 'User' as const,
    id: 4,
    displayName: 'LindaKat',
    youtube: null,
    linkedin: null,
    github: null,
    twitch: null,
    bluesky: null,
    website: 'https://lindakat.com',
  },
})
