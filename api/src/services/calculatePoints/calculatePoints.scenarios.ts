import type { Prisma, SharedLink } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SharedLinkCreateArgs>({
  sharedLink: {
    testLink: {
      data: {
        updatedAt: '2024-11-13T21:58:18.650Z',
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
              user: {
                create: {
                  email: 'voter1@example.com',
                  hashedPassword: 'String',
                  salt: 'String',
                },
              },
            },
            {
              user: {
                create: {
                  email: 'voter2@example.com',
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
            author: {
              create: {
                email: 'commenter@example.com',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            commentVotes: {
              create: {
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
  },
})
export type StandardScenario = ScenarioData<SharedLink, 'sharedLink'>
