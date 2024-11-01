import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const sharedLinks: QueryResolvers['sharedLinks'] = () => {
  return db.sharedLink.findMany()
}

export const sharedLink: QueryResolvers['sharedLink'] = ({ id }) => {
  return db.sharedLink.findUnique({
    where: { id },
  })
}

export const createSharedLink: MutationResolvers['createSharedLink'] = ({
  input,
}) => {
  return db.sharedLink.create({
    data: input,
  })
}

export const updateSharedLink: MutationResolvers['updateSharedLink'] = ({
  id,
  input,
}) => {
  return db.sharedLink.update({
    data: input,
    where: { id },
  })
}

export const deleteSharedLink: MutationResolvers['deleteSharedLink'] = ({
  id,
}) => {
  return db.sharedLink.delete({
    where: { id },
  })
}
