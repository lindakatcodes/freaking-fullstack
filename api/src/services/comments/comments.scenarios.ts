import type { Prisma, Comment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        body: 'Comment on post one',
        author: {
          create: {
            email: 'String4863399',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        link: {
          create: {
            updatedAt: '2025-03-13T23:04:47.671Z',
            title: 'First link',
            url: 'String',
            submittedBy: {
              create: {
                email: 'String8466579',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        body: 'Comment on post two',
        author: {
          create: {
            email: 'String3163585',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        link: {
          create: {
            updatedAt: '2025-03-13T23:04:47.698Z',
            title: 'Second link',
            url: 'String',
            submittedBy: {
              create: {
                email: 'String8228371',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
