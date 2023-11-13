import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

const handlers = NextAuth({
  providers: [
    Credentials({
      id: "email",
      name: "Email",
      type: "credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "email..." },
        password: { label: "Password", type: "password", placeholder: "password..." }
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "User Example", email: "user@example.com" }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return true
    },
    async redirect(url, baseUrl) {
      return baseUrl
    },
    async session(session, user) {
      return session
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token
    }
  },
})

export { handlers as GET, handlers as POST }