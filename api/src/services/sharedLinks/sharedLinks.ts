import type {
  QueryResolvers,
  MutationResolvers,
  SharedLinkRelationResolvers,
} from 'types/graphql'

import { validate } from '@redwoodjs/api'

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
  validate(input.title, 'title', {
    presence: {
      message: 'Please provide a title that describes the link you are sharing',
    },
  })

  validate(input.url, 'url', {
    format: {
      pattern:
        /http(s)?:\/\/[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
      message: 'Links should be valid urls, starting with https://',
    },
  })

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

export const SharedLink: SharedLinkRelationResolvers = {
  submittedBy: (_obj, { root }) => {
    return db.sharedLink.findUnique({ where: { id: root?.id } }).submittedBy()
  },
  comments: (_obj, { root }) => {
    return db.sharedLink.findUnique({ where: { id: root?.id } }).comments()
  },
}
