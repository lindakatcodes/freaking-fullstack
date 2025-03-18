import { db } from 'api/src/lib/db'

import { hashPassword } from '@redwoodjs/auth-dbauth-api'

// Manually apply seeds via the `yarn rw prisma db seed` command.
//
// Seeds automatically run the first time you run the `yarn rw prisma migrate dev`
// command and every time you run the `yarn rw prisma migrate reset` command.
//
// See https://redwoodjs.com/docs/database-seeds for more info

export default async () => {
  try {
    const users = [
      { displayName: 'Linda', email: 'linda@example.com', password: 'secret1' },
      { displayName: null, email: 'pip@example.com', password: 'secret2' },
    ]

    for (const user of users) {
      const [hashedPassword, salt] = hashPassword(user.password)

      await db.user.upsert({
        where: {
          email: user.email,
        },
        create: {
          displayName: user.displayName,
          email: user.email,
          hashedPassword,
          salt,
        },
        update: {
          displayName: user.displayName,
          hashedPassword,
          salt,
        },
      })
    }
  } catch (error) {
    console.error(error)
  }
}
