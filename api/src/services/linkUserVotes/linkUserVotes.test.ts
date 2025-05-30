import type { LinkUserVote } from '@prisma/client'

import { db } from 'src/lib/db'

import {
  linkUserVotes,
  linkUserVote,
  createLinkUserVote,
  deleteLinkUserVote,
} from './linkUserVotes'
import type { StandardScenario } from './linkUserVotes.scenarios'

describe('linkUserVotes', () => {
  scenario('returns all linkUserVotes', async (scenario: StandardScenario) => {
    const result = await linkUserVotes({
      linkId: scenario.linkUserVote.one.linkId,
    })
    const link = await db.sharedLink.findUnique({
      where: { id: scenario.linkUserVote.one.linkId },
      include: { linkVotes: true },
    })

    expect(result.length).toEqual(link.linkVotes.length)
  })

  scenario(
    'returns a single linkUserVote',
    async (scenario: StandardScenario) => {
      const result = await linkUserVote({ id: scenario.linkUserVote.one.id })

      expect(result).toEqual(scenario.linkUserVote.one)
    }
  )

  scenario('creates a linkUserVote', async (scenario: StandardScenario) => {
    const result = await createLinkUserVote({
      input: {
        linkId: scenario.linkUserVote.two.linkId,
        userId: scenario.linkUserVote.two.userId,
      },
    })

    expect(result.linkId).toEqual(scenario.linkUserVote.two.linkId)
    expect(result.userId).toEqual(scenario.linkUserVote.two.userId)
  })

  scenario('deletes a linkUserVote', async (scenario: StandardScenario) => {
    const original = (await deleteLinkUserVote({
      id: scenario.linkUserVote.one.id,
    })) as LinkUserVote
    const result = await linkUserVote({ id: original.id })

    expect(result).toEqual(null)
  })
})
