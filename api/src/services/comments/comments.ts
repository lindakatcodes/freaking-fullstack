import type {
  QueryResolvers,
  MutationResolvers,
  CommentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { calculatePoints } from '../calculatePoints/calculatePoints'

export const comments: QueryResolvers['comments'] = ({ linkId }) => {
  return db.comment.findMany({ where: { linkId } })
}

export const comment: QueryResolvers['comment'] = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const createComment: MutationResolvers['createComment'] = async ({
  input,
}) => {
  const result = await db.comment.create({
    data: input,
  })

  await calculatePoints({ linkId: input.linkId })

  return result
}

export const updateComment: MutationResolvers['updateComment'] = ({
  id,
  input,
}) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment: MutationResolvers['deleteComment'] = async ({
  id,
}) => {
  const result = await db.comment.delete({
    where: { id },
  })

  await calculatePoints({ linkId: result.linkId })

  return result
}

export const Comment: CommentRelationResolvers = {
  author: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).author()
  },
  link: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).link()
  },
  commentVotes: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).commentVotes()
  },
}
