import type { Comment } from '@prisma/client'

import { db } from 'src/lib/db'

import {
  comments,
  comment,
  createComment,
  updateComment,
  deleteComment,
} from './comments'
import type { StandardScenario } from './comments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('comments', () => {
  scenario(
    'returns all comments for a single post from the database',
    async (scenario: StandardScenario) => {
      const result = await comments({ linkId: scenario.comment.one.linkId })
      const post = await db.sharedLink.findUnique({
        where: { id: scenario.comment.one.linkId },
        include: { comments: true },
      })
      expect(result.length).toEqual(post.comments.length)
    }
  )

  scenario('returns a single comment', async (scenario: StandardScenario) => {
    const result = await comment({ id: scenario.comment.one.id })

    expect(result).toEqual(scenario.comment.one)
  })

  scenario('creates a comment', async (scenario: StandardScenario) => {
    const result = await createComment({
      input: {
        body: 'String',
        authorId: scenario.comment.two.authorId,
        linkId: scenario.comment.two.linkId,
      },
    })

    expect(result.body).toEqual('String')
    expect(result.authorId).toEqual(scenario.comment.two.authorId)
    expect(result.linkId).toEqual(scenario.comment.two.linkId)
  })

  scenario('updates a comment', async (scenario: StandardScenario) => {
    const original = (await comment({ id: scenario.comment.one.id })) as Comment
    const result = await updateComment({
      id: original.id,
      input: { body: 'String2' },
    })

    expect(result.body).toEqual('String2')
  })

  scenario('deletes a comment', async (scenario: StandardScenario) => {
    const original = (await deleteComment({
      id: scenario.comment.one.id,
    })) as Comment
    const result = await comment({ id: original.id })

    expect(result).toEqual(null)
  })
})
