import type {
  QueryResolvers,
  MutationResolvers,
  CommentUserVoteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { calculatePoints } from '../calculatePoints/calculatePoints'

export const commentUserVotes: QueryResolvers['commentUserVotes'] = ({
  commentId,
}) => {
  return db.commentUserVote.findMany({ where: { commentId } })
}

export const commentUserVote: QueryResolvers['commentUserVote'] = ({ id }) => {
  return db.commentUserVote.findUnique({
    where: { id },
  })
}

export const createCommentUserVote: MutationResolvers['createCommentUserVote'] =
  async ({ input }) => {
    const result = await db.commentUserVote.create({
      data: input,
    })

    const comment = await db.comment.findUnique({
      where: { id: result.commentId },
    })

    await calculatePoints({ linkId: comment.linkId })

    return result
  }

export const deleteCommentUserVote: MutationResolvers['deleteCommentUserVote'] =
  async ({ id }) => {
    const result = await db.commentUserVote.delete({
      where: { id },
    })

    const comment = await db.comment.findUnique({
      where: { id: result.commentId },
    })

    await calculatePoints({ linkId: comment.linkId })

    return result
  }

export const CommentUserVote: CommentUserVoteRelationResolvers = {
  comment: (_obj, { root }) => {
    return db.commentUserVote.findUnique({ where: { id: root?.id } }).comment()
  },
  user: (_obj, { root }) => {
    return db.commentUserVote.findUnique({ where: { id: root?.id } }).user()
  },
}
