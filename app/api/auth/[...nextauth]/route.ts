import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from '@/src/lib/db';

const handler = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    EmailProvider({
      sendVerificationRequest: async () => {
        // integrate Resend or SMTP
      },
    }),
    GitHubProvider({ clientId: '', clientSecret: '' }),
    GoogleProvider({ clientId: '', clientSecret: '' }),
    TwitterProvider({ clientId: '', clientSecret: '' }),
  ],
  session: { strategy: 'database' },
});

export { handler as GET, handler as POST };
