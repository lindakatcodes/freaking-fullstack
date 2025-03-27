import type { Prisma, SharedLink } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SharedLinkCreateArgs>({
  sharedLink: {
    testLink: {
      data: {
        createdAt: '2025-03-27T03:13:00Z',
        title: 'String',
        url: 'String',
        points: 0,
        submittedBy: {
          create: {
            email: 'user1@example.com',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        linkVotes: {
          create: [
            {
              createdAt: '2025-03-27T03:14:00Z',
              user: {
                create: {
                  email: 'voter1@example.com',
                  hashedPassword: 'String',
                  salt: 'String',
                },
              },
            },
            {
              createdAt: '2025-03-27T03:36:00Z',
              user: {
                create: {
                  email: 'voter2@example.com',
                  hashedPassword: 'String',
                  salt: 'String',
                },
              },
            },
            {
              createdAt: '2025-03-27T05:13:00Z',
              user: {
                create: {
                  email: 'voter3@example.com',
                  hashedPassword: 'String',
                  salt: 'String',
                },
              },
            },
          ],
        },
        comments: {
          create: {
            body: 'Test comment',
            createdAt: '2025-03-27T03:16:00Z',
            author: {
              create: {
                email: 'commenter@example.com',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            commentVotes: {
              create: {
                createdAt: '2025-03-27T03:21:00Z',
                user: {
                  create: {
                    email: 'commentvoter@example.com',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
      },
    },
    testLinkTwo: {
      data: {
        createdAt: '2025-03-27T03:20:00Z',
        title: 'String',
        url: 'String',
        points: 0,
        submittedBy: {
          create: {
            email: 'user2@example.com',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
export type StandardScenario = ScenarioData<SharedLink, 'sharedLink'>
