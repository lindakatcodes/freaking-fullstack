import type {
  QueryResolvers,
  MutationResolvers,
  LinkUserVoteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const linkUserVotes: QueryResolvers['linkUserVotes'] = ({ linkId }) => {
  return db.linkUserVote.findMany({ where: { linkId } })
}

export const linkUserVote: QueryResolvers['linkUserVote'] = ({ id }) => {
  return db.linkUserVote.findUnique({
    where: { id },
  })
}

export const createLinkUserVote: MutationResolvers['createLinkUserVote'] = ({
  input,
}) => {
  return db.linkUserVote.create({
    data: input,
  })
}

export const updateLinkUserVote: MutationResolvers['updateLinkUserVote'] = ({
  id,
  input,
}) => {
  return db.linkUserVote.update({
    data: input,
    where: { id },
  })
}

export const deleteLinkUserVote: MutationResolvers['deleteLinkUserVote'] = ({
  id,
}) => {
  return db.linkUserVote.delete({
    where: { id },
  })
}

export const LinkUserVote: LinkUserVoteRelationResolvers = {
  link: (_obj, { root }) => {
    return db.linkUserVote.findUnique({ where: { id: root?.id } }).link()
  },
  user: (_obj, { root }) => {
    return db.linkUserVote.findUnique({ where: { id: root?.id } }).user()
  },
}
