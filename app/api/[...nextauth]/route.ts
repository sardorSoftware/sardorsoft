import NextAuth from 'next-auth';


const handler = NextAuth({
	providers: [],

	callbacks: {
		async session({ session }) {
			return session
		},
	},

	secret: process.env.NEXTAUTH_SECRET,

	pages: {
		signIn: '/auth/signin',
    },
})

export { handler as GET, handler as POST}