import type { Prisma, LinkUserVote } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LinkUserVoteCreateArgs>({
  linkUserVote: {
    one: {
      data: {
        link: {
          create: {
            updatedAt: '2025-03-18T22:46:30.209Z',
            title: 'String',
            url: 'String',
            submittedBy: {
              create: {
                email: 'String9786054',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String4537388',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        link: {
          create: {
            updatedAt: '2025-03-18T22:46:30.242Z',
            title: 'String',
            url: 'String',
            submittedBy: {
              create: {
                email: 'String5247014',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String2988900',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<LinkUserVote, 'linkUserVote'>
