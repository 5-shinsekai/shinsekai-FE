import { commonResponseType, userDataType } from '@/types/common';
import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        loginId: { label: 'loginId', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials?.loginId || !credentials?.password) {
          return null;
        }

        const { loginId, password } = credentials;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/member/sign-in`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ loginId, password }),
            }
          );

          const user = (await res.json()) as commonResponseType<userDataType>;
          console.log('data', user);
          if (!user.isSuccess) {
            return null;
          }
          return {
            ...user.result,
            id: user.result.memberUuid,
          };
        } catch (error) {
          console.error('error', error);
        }
        return null;
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || '',
      clientSecret: process.env.KAKAO_CLIENT_SECERET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (profile && account) {
        console.log('profile', profile);
        console.log('account', account);
        console.log('user', user);
        try {
          const res = await fetch(
            `http://localhost:8080/api/v1/auth/oauth-sign-in`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                provider: account.provider,
                providerId: account.providerAccountId,
                providerEmail: 'beat1103@gmail.com',
              }),
              cache: 'no-cache',
            }
          );
          const data = (await res.json()) as commonResponseType<userDataType>;
          console.log('server data', data);
          user.accessToken = data.result.accessToken;
          user.refreshToken = data.result.refreshToken;
          user.name = data.result.name;
          user.memberUuid = data.result.memberUuid;
          console.log('kakao', user);
          return true;
        } catch (error) {
          console.error('error', error);
          return '/sign-up';
        }
      }
      // console.log('signIn', user, account, profile);
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: '/sign-in',
    error: '/error',
  },
};
