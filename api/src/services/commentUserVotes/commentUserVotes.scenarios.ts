import type { Prisma, CommentUserVote } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentUserVoteCreateArgs>({
  commentUserVote: {
    one: {
      data: {
        comment: {
          create: {
            body: 'First comment',
            author: {
              create: {
                email: 'String6844205',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            link: {
              create: {
                updatedAt: '2025-03-18T22:47:31.917Z',
                title: 'String',
                url: 'String',
                submittedBy: {
                  create: {
                    email: 'String7164325',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
        user: {
          create: {
            email: 'String2795325',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        comment: {
          create: {
            body: 'String',
            author: {
              create: {
                email: 'String2563562',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            link: {
              create: {
                updatedAt: '2025-03-18T22:47:31.981Z',
                title: 'String',
                url: 'String',
                submittedBy: {
                  create: {
                    email: 'String4892957',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },
          },
        },
        user: {
          create: {
            email: 'String5504248',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CommentUserVote, 'commentUserVote'>
