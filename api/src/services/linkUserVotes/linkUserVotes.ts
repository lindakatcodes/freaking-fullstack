import type {
  QueryResolvers,
  MutationResolvers,
  LinkUserVoteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { calculatePoints } from '../calculatePoints/calculatePoints'

export const linkUserVotes: QueryResolvers['linkUserVotes'] = ({ linkId }) => {
  return db.linkUserVote.findMany({ where: { linkId } })
}

export const linkUserVote: QueryResolvers['linkUserVote'] = ({ id }) => {
  return db.linkUserVote.findUnique({
    where: { id },
  })
}

export const createLinkUserVote: MutationResolvers['createLinkUserVote'] =
  async ({ input }) => {
    const result = await db.linkUserVote.create({
      data: input,
    })

    await calculatePoints({ linkId: input.linkId })

    return result
  }

export const deleteLinkUserVote: MutationResolvers['deleteLinkUserVote'] =
  async ({ id }) => {
    const result = await db.linkUserVote.delete({
      where: { id },
    })

    await calculatePoints({ linkId: result.linkId })

    return result
  }

export const LinkUserVote: LinkUserVoteRelationResolvers = {
  link: (_obj, { root }) => {
    return db.linkUserVote.findUnique({ where: { id: root?.id } }).link()
  },
  user: (_obj, { root }) => {
    return db.linkUserVote.findUnique({ where: { id: root?.id } }).user()
  },
}
